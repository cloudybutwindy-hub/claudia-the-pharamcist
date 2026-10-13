# Claudia van Wyk – personal website

A simple website listing Claudia's offers for pharmacy students, graduates and early-career pharmacists. It is hosted free on GitHub Pages.

## Changing your offers (no coding needed)

Everything you'll normally change is in **`offers.js`**:

1. On github.com, open `offers.js` and click the **pencil icon** (Edit).
2. Change only the text inside the quotation marks, for example:
   - `status: "coming soon"` → `status: "live"` to launch an offer
   - `status: "live"` → `status: "hidden"` to hide one
   - `price: ""` → `price: "R350"` to add a price
   - `buttonLink: ""` → `buttonLink: "https://..."` to add a checkout or booking link
3. Keep every quotation mark, comma and bracket exactly where it is.
4. Click **Commit changes**. The live site updates in about a minute.

**Status options:**
- `"live"`: shown with its button
- `"coming soon"`: shown in the *Launching soon* section with a "Notify me" button
- `"hidden"`: not shown anywhere

**Buttons without a link:** if `buttonLink` is empty, the button opens an email to you with the offer name as the subject.

**Settings at the top of `offers.js`:**
- `waitlistLink`: paste a Google Form link here and every "Notify me" button will use it
- `linkedin`, `instagram`, `facebook`: add your profile links to show them in the footer
- `launchSpecial`: change `show: false` to `show: true` to display a launch-special banner

## Other files

- `index.html`: home page text (headline, About section)
- `offer.html`: the page for each offer's details (filled in automatically from `offers.js`)
- `styles.css`: colours and layout
- `app.js`: site logic (no need to edit)
- `assets/`: photo and illustrations
