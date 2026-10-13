/* =====================================================================
   YOUR OFFERS — this is the only file you need to edit.

   HOW TO EDIT (on github.com):
   1. Open this file and click the pencil icon (Edit).
   2. Change only the text between the quotation marks "like this".
   3. Keep every quotation mark, comma, colon and bracket in place.
   4. Click "Commit changes". Your site updates in about a minute.

   STATUS options for each offer:
     "live"         = shown normally with its button
     "coming soon"  = shown as a teaser with a "Launching soon" badge
                      and a "Notify me" button
     "hidden"       = not shown anywhere on the site

   PRICES: write them like "R350". Leave as "" to show no price.
   salePrice: optional. If filled in, the normal price is shown
   crossed out next to it.

   BUTTON LINKS: if buttonLink is left as "", the button opens an
   email to you with the offer name as the subject — handy until you
   have a checkout or booking link for that offer.
   ===================================================================== */

const SETTINGS = {
  name: "Claudia van Wyk",
  email: "claudia.pharmacist@gmail.com",
  bookingLink: "https://calendly.com/claudia-pharmacist",

  // Link for "Notify me" buttons (e.g. a Google Form waitlist).
  // Leave as "" and "Notify me" will open an email to you instead.
  waitlistLink: "",

  // Social links — leave as "" to hide that icon.
  linkedin: "",
  instagram: "",
  facebook: "",

  // Launch special banner at the top of the site.
  // Change show: false to show: true to switch it on.
  launchSpecial: {
    show: false,
    text: "Launch special: the first 10 clients get 20% off CV & LinkedIn services",
    endsOn: "31 October 2026"
  }
};

const OFFERS = [

  /* ---------------- START HERE ---------------- */
  {
    id: "coffee-and-careers",
    section: "Start here",
    title: "Coffee & Careers with Claudia",
    summary: "A free, relaxed 30-minute online conversation about your career questions and next steps.",
    forWho: "Pharmacy students, new graduates and early-career pharmacists",
    includes: [
      "30-minute online video call",
      "Space to ask anything about careers in pharmacy",
      "Ideas for your next steps",
      "One complimentary session per person"
    ],
    price: "Free",
    salePrice: "",
    buttonText: "Book a free chat",
    buttonLink: "https://calendly.com/claudia-pharmacist",
    status: "live",
    featured: true
  },
  {
    id: "young-pharmacists-guide",
    section: "Start here",
    title: "The Young Pharmacist's Guide",
    summary: "A 20-section career guide for pharmacy students and early-career pharmacists.",
    teaser: "Everything I wish I'd known when I started — in one practical guide.",
    forWho: "Pharmacy students and early-career pharmacists",
    includes: [
      "20 practical sections",
      "Career paths beyond the dispensary",
      "Real stories from pharmacists"
    ],
    price: "",
    salePrice: "",
    buttonText: "Buy now",
    buttonLink: "",
    status: "coming soon"
  },
  {
    id: "share-your-story",
    section: "Start here",
    title: "Share your story",
    summary: "Experienced pharmacists: contribute your career story to The Young Pharmacist's Guide.",
    forWho: "Pharmacists in any sector who want to inspire the next generation",
    includes: [
      "Quick online form",
      "Your story featured in the guide",
      "A complimentary copy of the guide"
    ],
    price: "",
    salePrice: "",
    buttonText: "Share your story",
    buttonLink: "https://forms.gle/psMKkJrPTiTPYbCA9",
    status: "live"
  },

  /* ---------------- CV & LINKEDIN ---------------- */
  {
    id: "cv-review",
    section: "CV & LinkedIn",
    title: "CV & Cover Letter Review",
    summary: "Translate your pharmacy experience for roles in industry, research, regulatory, NGOs and beyond.",
    forWho: "Anyone applying for a new role or changing sector",
    includes: [
      "Detailed review of your CV and cover letter",
      "Suggestions tailored to the roles you're targeting",
      "Tips on presenting pharmacy experience for other sectors"
    ],
    price: "",
    salePrice: "",
    buttonText: "Get started",
    buttonLink: "",
    status: "live",
    featured: true
  },
  {
    id: "linkedin-review",
    section: "CV & LinkedIn",
    title: "LinkedIn Profile Review",
    summary: "Improve your visibility and position yourself for new opportunities.",
    forWho: "Students, graduates and pharmacists building their professional presence",
    includes: [
      "Headline and About section feedback",
      "Experience and skills suggestions",
      "Tips to get noticed by recruiters"
    ],
    price: "",
    salePrice: "",
    buttonText: "Get started",
    buttonLink: "",
    status: "live"
  },
  {
    id: "cv-linkedin-bundle",
    section: "CV & LinkedIn",
    title: "CV + LinkedIn Bundle",
    summary: "Both services together at a reduced price.",
    forWho: "Anyone getting ready for their next career move",
    includes: [
      "CV & Cover Letter Review",
      "LinkedIn Profile Review",
      "Save compared with buying separately"
    ],
    price: "",
    salePrice: "",
    buttonText: "Get the bundle",
    buttonLink: "",
    status: "live"
  },

  /* ---------------- ONE-ON-ONE SESSIONS ---------------- */
  {
    id: "career-clarity",
    section: "One-on-one sessions",
    title: "Career Clarity Session",
    summary: "A 60-minute in-depth session followed by a short written action plan.",
    forWho: "Anyone who wants focused guidance on their next career step",
    includes: [
      "60-minute online session",
      "Discussion of your goals, options and strengths",
      "Written action plan afterwards"
    ],
    price: "",
    salePrice: "",
    buttonText: "Book a session",
    buttonLink: "",
    status: "live",
    featured: true
  },
  {
    id: "mock-interview",
    section: "One-on-one sessions",
    title: "Mock Interview & Feedback",
    summary: "Practise for industry, clinical research, regulatory, medical affairs and NGO interviews.",
    teaser: "Walk into your next interview prepared and confident.",
    forWho: "Anyone with an upcoming interview",
    includes: [
      "Realistic practice interview",
      "Honest, constructive feedback",
      "Tips for your target sector"
    ],
    price: "",
    salePrice: "",
    buttonText: "Book now",
    buttonLink: "",
    status: "coming soon"
  },
  {
    id: "postgrad-research",
    section: "One-on-one sessions",
    title: "Postgraduate & Research Guidance",
    summary: "Deciding on a master's, finding a study leader, applying, and publishing your first paper.",
    teaser: "Thinking about a master's? Let's map out the route together.",
    forWho: "Students and pharmacists considering postgraduate study or research",
    includes: [
      "Is postgraduate study right for you?",
      "Finding a study leader and topic",
      "Applications and first publications"
    ],
    price: "",
    salePrice: "",
    buttonText: "Book now",
    buttonLink: "",
    status: "coming soon"
  },
  {
    id: "global-health",
    section: "One-on-one sessions",
    title: "Global Health & International Careers",
    summary: "How to get into NGOs, international projects and global health roles.",
    teaser: "Curious about NGOs and international work? This one's for you.",
    forWho: "Pharmacists interested in global health and international work",
    includes: [
      "The global health landscape for pharmacists",
      "Building relevant experience",
      "Finding and applying for roles"
    ],
    price: "",
    salePrice: "",
    buttonText: "Book now",
    buttonLink: "",
    status: "coming soon"
  },

  /* ---------------- PACKAGES ---------------- */
  {
    id: "career-launch",
    section: "Packages",
    title: "Career Launch Package",
    summary: "CV + LinkedIn + a 60-minute strategy session.",
    teaser: "Everything you need to start your career strong, in one package.",
    forWho: "Final-year students, interns and community service pharmacists",
    includes: [
      "CV & Cover Letter Review",
      "LinkedIn Profile Review",
      "60-minute strategy session"
    ],
    price: "",
    salePrice: "",
    buttonText: "Get started",
    buttonLink: "",
    status: "coming soon"
  },
  {
    id: "career-switch",
    section: "Packages",
    title: "Career Switch Programme",
    summary: "Three sessions over 6–8 weeks for pharmacists moving into a new sector.",
    teaser: "Ready for a change? A guided programme to make the move.",
    forWho: "Pharmacists moving out of retail or hospital into another sector",
    includes: [
      "Three one-on-one sessions",
      "CV and LinkedIn repositioning",
      "Support over 6–8 weeks"
    ],
    price: "",
    salePrice: "",
    buttonText: "Apply now",
    buttonLink: "",
    status: "hidden"
  },

  /* ---------------- WORKSHOPS & EVENTS ---------------- */
  {
    id: "student-workshops",
    section: "Workshops & events",
    title: "Workshops for Student Societies",
    summary: "CV writing, interview skills and careers beyond the dispensary, for pharmacy student groups.",
    teaser: "Bring a career workshop to your pharmacy student society.",
    forWho: "Pharmacy student societies and university groups",
    includes: [
      "Interactive online or in-person workshop",
      "Topics tailored to your group",
      "Time for questions"
    ],
    price: "",
    salePrice: "",
    buttonText: "Enquire",
    buttonLink: "",
    status: "coming soon"
  },
  {
    id: "career-panels",
    section: "Workshops & events",
    title: "Career Panels",
    summary: "Webinars with pharmacists from different career paths.",
    teaser: "Hear from pharmacists who've taken different paths.",
    forWho: "Anyone exploring pharmacy career options",
    includes: [
      "Live panel discussion",
      "Audience Q&A",
      "Recording available afterwards"
    ],
    price: "",
    salePrice: "",
    buttonText: "Register",
    buttonLink: "",
    status: "hidden"
  },
  {
    id: "ai-for-pharmacists",
    section: "Workshops & events",
    title: "AI for Pharmacists Workshop",
    summary: "Practical ways to use AI tools in your pharmacy work and job search.",
    teaser: "Learn to use AI tools confidently in pharmacy and your career.",
    forWho: "Pharmacy students and pharmacists curious about AI",
    includes: [
      "Hands-on introduction to AI tools",
      "Using AI for job applications",
      "Responsible use in pharmacy practice"
    ],
    price: "",
    salePrice: "",
    buttonText: "Register",
    buttonLink: "",
    status: "coming soon"
  }

];
