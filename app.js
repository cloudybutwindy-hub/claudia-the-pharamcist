/* Site logic — you shouldn't need to edit this file. Edit offers.js instead. */

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function mailto(subject) {
  return "mailto:" + SETTINGS.email + "?subject=" + encodeURIComponent(subject);
}

function buyLink(o) {
  return o.buttonLink ? o.buttonLink : mailto(o.title);
}

function notifyLink(o) {
  return SETTINGS.waitlistLink ? SETTINGS.waitlistLink : mailto("Notify me: " + o.title);
}

function isExternal(url) { return /^https?:/.test(url); }

function linkAttrs(url) {
  return 'href="' + esc(url) + '"' + (isExternal(url) ? ' target="_blank" rel="noopener"' : "");
}

function priceHtml(o) {
  if (o.salePrice && o.price) return "<s>" + esc(o.price) + "</s>" + esc(o.salePrice);
  if (o.salePrice) return esc(o.salePrice);
  return esc(o.price);
}

function visible(o) { return o.status === "live" || o.status === "coming soon"; }

function cardHtml(o) {
  const soon = o.status === "coming soon";
  const price = priceHtml(o);
  let badge = "";
  if (soon) badge = '<span class="badge">Launching soon</span>';
  else if ((o.price || "").toLowerCase() === "free") badge = '<span class="badge free">Free</span>';

  const text = soon && o.teaser ? o.teaser : o.summary;
  const actions = soon
    ? '<a class="btn btn-outline btn-small" ' + linkAttrs(notifyLink(o)) + ">Notify me</a>"
    : '<a class="btn btn-green btn-small" ' + linkAttrs(buyLink(o)) + ">" + esc(o.buttonText || "Find out more") + "</a>" +
      '<a class="more" href="offer.html?id=' + encodeURIComponent(o.id) + '">Details →</a>';

  return '<article class="card' + (soon ? " soon" : "") + '">' + badge +
    "<h4>" + esc(o.title) + "</h4>" +
    "<p>" + esc(text) + "</p>" +
    (!soon && price ? '<div class="price">' + price + "</div>" : "") +
    '<div class="card-actions">' + actions + "</div></article>";
}

function renderOffers() {
  const box = document.getElementById("offers-list");
  if (!box) return;
  const sections = [];
  const live = OFFERS.filter(o => o.status === "live");
  live.forEach(o => { if (!sections.includes(o.section)) sections.push(o.section); });
  box.innerHTML = sections.map(sec => {
    const items = live.filter(o => o.section === sec);
    return '<div class="offer-group"><h3>' + esc(sec) + '</h3><div class="grid">' +
      items.map(cardHtml).join("") + "</div></div>";
  }).join("");
}

function renderFeatured() {
  const box = document.getElementById("featured-list");
  if (!box) return;
  box.innerHTML = OFFERS.filter(o => o.status === "live" && o.featured).map(cardHtml).join("");
}

function renderSoonStrip() {
  const strip = document.getElementById("soon-strip");
  if (!strip) return;
  const soon = OFFERS.filter(o => o.status === "coming soon");
  if (!soon.length) { strip.remove(); return; }
  document.getElementById("soon-items").innerHTML = soon.map(cardHtml).join("");
  const btn = document.getElementById("soon-notify");
  btn.setAttribute("href", SETTINGS.waitlistLink || mailto("Notify me when new offers launch"));
  if (SETTINGS.waitlistLink) { btn.target = "_blank"; btn.rel = "noopener"; }
}

function renderBanner() {
  const s = SETTINGS.launchSpecial;
  if (!s || !s.show) return;
  const div = document.createElement("div");
  div.className = "banner";
  div.textContent = s.text + (s.endsOn ? " — until " + s.endsOn : "");
  document.body.prepend(div);
}

function renderCommon() {
  document.querySelectorAll("[data-booking]").forEach(a => a.setAttribute("href", SETTINGS.bookingLink));
  document.querySelectorAll("[data-email]").forEach(a => {
    a.setAttribute("href", "mailto:" + SETTINGS.email);
    if (!a.textContent.trim()) a.textContent = SETTINGS.email;
  });
  const soc = document.getElementById("socials");
  if (soc) {
    soc.innerHTML = ["linkedin", "instagram", "facebook"]
      .filter(k => SETTINGS[k])
      .map(k => '<a href="' + esc(SETTINGS[k]) + '" target="_blank" rel="noopener">' + k[0].toUpperCase() + k.slice(1) + "</a>")
      .join("");
  }
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  const btn = document.querySelector(".menu-btn");
  const links = document.querySelector(".nav-links");
  if (btn && links) {
    btn.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
  }
}

function renderDetail() {
  const box = document.getElementById("detail");
  if (!box) return;
  const id = new URLSearchParams(location.search).get("id");
  const o = OFFERS.find(x => x.id === id && visible(x));
  if (!o) {
    document.getElementById("detail-title").textContent = "Offer not found";
    document.getElementById("detail-summary").textContent = "This offer isn't available right now.";
    box.innerHTML = '<p><a class="btn btn-green" href="index.html#offers">See all offers</a></p>';
    return;
  }
  const soon = o.status === "coming soon";
  document.title = o.title + " | " + SETTINGS.name;
  document.getElementById("detail-title").textContent = o.title;
  document.getElementById("detail-summary").textContent = o.summary;
  const price = priceHtml(o);
  box.innerHTML =
    "<div>" +
      "<h2>Who it's for</h2><p>" + esc(o.forWho) + "</p>" +
      (o.includes && o.includes.length ? "<h2>What's included</h2><ul class=\"ticks\">" + o.includes.map(i => "<li>" + esc(i) + "</li>").join("") + "</ul>" : "") +
    "</div>" +
    '<aside class="buy-box">' +
      (soon ? '<div class="price" style="font-size:22px">Launching soon</div>' : (price ? '<div class="price">' + price + "</div>" : "")) +
      (soon
        ? '<a class="btn btn-green" ' + linkAttrs(notifyLink(o)) + ">Notify me</a><p class=\"note\">Be the first to know when this launches.</p>"
        : '<a class="btn btn-green" ' + linkAttrs(buyLink(o)) + ">" + esc(o.buttonText || "Get started") + "</a>" +
          '<p class="note">Questions? Email <a data-email></a></p>') +
    "</aside>";
}

document.addEventListener("DOMContentLoaded", () => {
  renderBanner();
  renderFeatured();
  renderOffers();
  renderSoonStrip();
  renderDetail();
  renderCommon();
});
