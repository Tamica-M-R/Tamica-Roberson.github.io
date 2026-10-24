// Every book in SEASONS. Edit status lines and add store links here as books release.
// line: "shared" | "duo" (two-in-one) | "xavier" | "marcus" | "prequel"
// page: true gives the book its own page at /books/<slug>/
// links: { amazon: "", books2read: "" }  The first non-empty link becomes the buy button.

const contentNotes = [
  "Childhood abuse by a parent",
  "Pregnancy loss",
  "A soldier missing in action and wounded",
  "Cancer and serious illness",
  "Gun violence",
];

// Book One is the free first read, and the way into both series.
const bookOne = {
  slug: "book-one-summer-2002",
  line: "shared",
  label: "Book One",
  title: "Summer 2002",
  season: "Summer 2002",
  art: "sunflower-peony",
  status: "Free for Letters subscribers, early 2027",
  page: true,
  blurb: [
    "Summer 2002. Galveston. Imani is twenty-three and has spent her whole life bracing for the next blow. Xavier is twenty-two, quiet and steady, and he says one word like he means it: forever.",
    "A girl raised in the furnace does not trust anything that warm. And the past is not finished with her yet.",
    "Book One is where SEASONS begins, and where it splits in two.",
  ],
  links: {},
};

// The prequel arrives after the series, so readers meet Xavier and Marcus in Book One
// without it coloring their choice. It stays off the site until then:
// to introduce it, move it into the `all` list below and set page: true.
const prequel = {
  slug: "before-the-storm",
  line: "prequel",
  label: "Book Nine",
  title: "Before the Storm",
  season: "Summer 1999",
  art: "bee-screen",
  status: "Arrives after the series",
  page: false,
  blurb: [
    "Summer 1999. Imani is twenty when a bee gets into her apartment and a stranger catches it. Marcus Carter is twenty-five. He comes back to fix her screen, and then he keeps coming back.",
    "Before the Storm is the prequel to SEASONS: how Imani met the man who would teach her what she was worth, and what it cost her to learn it.",
  ],
  links: {},
};

// Books Two to Eight are two-in-one editions: Xavier's Story and Marcus's Story
// for the same book number, published together in one book.
const numbers = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];

// Cover mockup: each side's season (from its title page) and the object drawn on its half.
const sideCovers = {
  xavier: [
    { season: "Fall 2002", art: "letters" },
    { season: "Winter 2003", art: "list" },
    { season: "Summer 2003", art: "dogtags" },
    { season: "Spring 2004", art: "shoes" },
    { season: "Summer and Fall 2004", art: "mirror" },
    { season: "Winter 2004 to Summer 2007", art: "coat" },
    { season: "Summer 2007 to Spring 2026", art: "door" },
  ],
  marcus: [
    { season: "Fall 2002", art: "peony" },
    { season: "Spring 2003", art: "dress" },
    { season: "Summer 2003", art: "placemat" },
    { season: "Fall 2003", art: "cross" },
    { season: "Spring 2004", art: "bee" },
    { season: "Summer 2004", art: "suitcase" },
    { season: "Fall 2004 to Spring 2005", art: "star" },
  ],
};

const duo = numbers.map((n, i) => ({
  slug: `book-${i + 2}`,
  line: "duo",
  label: `Book ${n}`,
  title: "",
  seasons: { xavier: sideCovers.xavier[i].season, marcus: sideCovers.marcus[i].season },
  art: { xavier: sideCovers.xavier[i].art, marcus: sideCovers.marcus[i].art },
  status: i < 4 ? "Coming 2027" : "Coming 2028",
  page: false,
  links: {},
}));

// Each side of a two-in-one book, for artwork that shows the two lives apart.
const sides = [];
for (const line of ["xavier", "marcus"]) {
  numbers.forEach((n, i) =>
    sides.push({ slug: `${line}-book-${i + 2}`, line, label: `Book ${n}`, title: "", ...sideCovers[line][i] })
  );
}

const all = [bookOne, ...duo];

export default {
  contentNotes,
  all,
  bookOne,
  prequel,
  duo,
  sides,
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
