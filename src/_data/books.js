// Every book in SEASONS. Edit status lines and add store links here as books release.
// line: "prequel" | "shared" | "xavier" | "marcus"
// page: true gives the book its own page at /books/<slug>/
// links: { amazon: "", books2read: "" }  The first non-empty link becomes the buy button.

const contentNotes = [
  "Childhood abuse by a parent",
  "Pregnancy loss",
  "A soldier missing in action and wounded",
  "Cancer and serious illness",
  "Gun violence",
];

const all = [
  {
    slug: "before-the-storm",
    line: "prequel",
    label: "Prequel",
    title: "Before the Storm",
    season: "Summer 1999",
    status: "Free for Letters subscribers",
    page: true,
    blurb: [
      "Summer 1999. Imani is twenty when a bee gets into her apartment and a stranger catches it. Marcus Carter is twenty-five. He comes back to fix her screen, and then he keeps coming back.",
      "Before the Storm is the prequel to SEASONS: how Imani met the man who would teach her what she was worth, and what it cost her to learn it.",
    ],
    links: {},
  },
  {
    slug: "book-one-summer-2002",
    line: "shared",
    label: "Book One",
    title: "Summer 2002",
    season: "Summer 2002",
    status: "Coming spring 2027",
    page: true,
    blurb: [
      "Summer 2002. Galveston. Imani is twenty-three and has spent her whole life bracing for the next blow. Xavier is twenty-two, quiet and steady, and he says one word like he means it: forever.",
      "A girl raised in the furnace does not trust anything that warm. And the past is not finished with her yet.",
      "Book One is where SEASONS begins, and where it splits in two.",
    ],
    links: {},
  },
];

const numbers = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];
for (const line of ["xavier", "marcus"]) {
  numbers.forEach((n, i) => {
    all.push({
      slug: `${line}-book-${i + 2}`,
      line,
      label: `Book ${n}`,
      title: "",
      status: i < 3 ? "Coming 2027" : "Coming 2028",
      page: false,
      links: {},
    });
  });
}

export default {
  contentNotes,
  all,
  pages: all.filter((b) => b.page),
  lines: {
    xavier: {
      name: "Xavier’s Story",
      promise: "The soldier who said forever. Army life, letters numbered like rent, a family built in Germany, and the work it takes to stay.",
    },
    marcus: {
      name: "Marcus’s Story",
      promise: "The first man who loved her out loud. The life where she chooses him, and learns what that love is made of.",
    },
  },
};
