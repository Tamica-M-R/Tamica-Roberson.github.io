// The press page (/press/), the printable press kit (/press/kit/) and the bios download
// (/press/bios.txt) all read from this file, so a change here updates all three.
// After changing anything, rebuild the PDF and ZIP downloads: npm run press-kit

import books from "./books.js";

export default {
  // Downloads made by scripts/press-kit.mjs, kept in src/assets/press/.
  kit: {
    pdf: "/assets/press/tamica-m-roberson-press-kit.pdf",
    pdfName: "Tamica-M-Roberson-press-kit.pdf",
    zip: "/assets/press/tamica-m-roberson-press-kit.zip",
    zipName: "Tamica-M-Roberson-press-kit.zip",
    bios: "/press/bios.txt",
    biosName: "Tamica-M-Roberson-bios.txt",
  },

  facts: [
    { label: "Author", value: "Tamica M. Roberson" },
    { label: "Series", value: "SEASONS, eight books" },
    { label: "Genre", value: "Women’s fiction with a love story at its center" },
    { label: "Book One", value: `Summer 2002. ${books.bookOne.status}.` },
    { label: "Books Two to Eight", value: "Two-in-one editions, Xavier’s Story and Marcus’s Story together, 2027 and 2028" },
    { label: "Formats", value: "Ebook and paperback" },
    { label: "Lives in", value: "Germany" },
  ],

  bios: {
    line: "Tamica M. Roberson is a thyroid cancer survivor, a military spouse and the author of SEASONS, a women’s fiction series inspired by her life.",
    short:
      "Tamica M. Roberson is the author of SEASONS, a women’s fiction series inspired by her life. A thyroid cancer survivor, proud military spouse and empty nester, she wrote the series across the USA and Europe. As SHE FLUTTER, she shares style, travel and the story behind the books on YouTube, Instagram, TikTok and Facebook. Germany is home for now.",
    long: [
      "Tamica M. Roberson is a thyroid cancer survivor, a proud military spouse and an empty nester who turned a season of change into a novel series. After cancer, Europe became more than a duty station. It became a place for healing, creativity and growth, and the place where SEASONS took shape.",
      "SEASONS follows Imani, a young woman raised in a hard house, as she learns to be loved without being hurt. The series opens with Book One, Summer 2002, then splits into two lives, Xavier’s Story and Marcus’s Story, published side by side in two-in-one books.",
      "Tamica wrote and imagined the books all over the USA and Europe, from Los Angeles and Maui to Paris, Lisbon, Capri and the Vatican. As SHE FLUTTER, she shares the places, the style and the real moments behind the story. Germany is home for now.",
    ],
  },

  series: [
    "SEASONS is women’s fiction with a love story at its center. Book One, Summer 2002, opens in Galveston, Texas. Imani is twenty-three and has spent her whole life bracing for the next blow. Xavier is twenty-two, quiet and steady, and he says one word like he means it: forever.",
    "After Book One the story splits into two lives. Books Two to Eight carry both, Xavier’s Story and Marcus’s Story, together in two-in-one editions, so readers can follow one life or both. It is two lives, not a love triangle: in each story Imani is fully committed to one man.",
  ],

  angles: [
    { title: "A new chapter after cancer", text: "A thyroid cancer survivor and empty nester who started a novel series and a brand in a new season of life." },
    { title: "Military spouse life, from the inside", text: "Moves, waiting for the phone to ring, homecomings, and building a home at a duty station in Germany." },
    { title: "Two lives, one woman", text: "Why SEASONS splits in two after Book One, and why readers are already choosing Team Xavier or Team Marcus." },
    { title: "Breaking the cycle", text: "The question at the heart of the series: can a girl raised in a hard house learn to be loved, and to love, without passing the hurt on?" },
    { title: "Style and travel as storytelling", text: "Outfits from the pages and the places behind the books, filmed across Europe as SHE FLUTTER." },
    { title: "Living well with a thyroid condition", text: "Energy, routines and what lives in the purse pharmacy, from someone living it." },
  ],

  questions: [
    "SEASONS is inspired by your life. Why tell it as fiction?",
    "Who is Imani when readers first meet her in Summer 2002?",
    "Why does the story split into two lives after Book One?",
    "How did surviving thyroid cancer change what you wanted to make?",
    "What has military spouse life taught you about love and waiting?",
    "You wrote the books across the USA and Europe. Which place shows up most in the pages?",
    "Where does the name SHE FLUTTER come from?",
    "What do you hope women in their own season of change take from Imani’s story?",
  ],

  reviewCopies:
    "Advance reading copies of Book One will be available to reviewers, journalists and podcast hosts before release.",

  photos: [
    {
      src: "/assets/img/tamica-luxembourg-1200.jpg",
      thumb: "/assets/img/tamica-luxembourg-800.jpg",
      file: "Tamica-M-Roberson-Luxembourg.jpg",
      caption: "Luxembourg",
      size: "1200 × 1600",
      alt: "Tamica smiling, seated on a stone wall above a green valley in Luxembourg",
    },
    {
      src: "/assets/img/places/versailles-1200.jpg",
      thumb: "/assets/img/places/versailles-640.jpg",
      file: "Tamica-M-Roberson-Versailles.jpg",
      caption: "Versailles",
      size: "1200 × 1732",
      alt: "Tamica on a balcony at Versailles, looking out over autumn trees",
    },
  ],

  logos: [
    {
      name: "Logo, color",
      preview: "/assets/img/brand/she-flutter-logo-color.png",
      files: [
        { label: "PNG", src: "/assets/img/brand/she-flutter-logo-color.png", file: "She-Flutter-logo-color.png" },
        { label: "SVG", src: "/assets/img/brand/she-flutter-butterfly-color.svg", file: "She-Flutter-logo-color.svg" },
      ],
    },
    {
      name: "Logo, white",
      dark: true,
      preview: "/assets/img/brand/she-flutter-logo-white.png",
      files: [{ label: "PNG", src: "/assets/img/brand/she-flutter-logo-white.png", file: "She-Flutter-logo-white.png" }],
    },
    {
      name: "Logo, black",
      preview: "/assets/img/brand/she-flutter-logo-black.png",
      files: [
        { label: "PNG", src: "/assets/img/brand/she-flutter-logo-black.png", file: "She-Flutter-logo-black.png" },
        { label: "SVG", src: "/assets/img/brand/she-flutter-butterfly-black.svg", file: "She-Flutter-logo-black.svg" },
      ],
    },
    {
      name: "Wordmark, color",
      preview: "/assets/img/brand/she-flutter-mark-color.svg",
      files: [{ label: "SVG", src: "/assets/img/brand/she-flutter-mark-color.svg", file: "She-Flutter-wordmark-color.svg" }],
    },
    {
      name: "Wordmark, black",
      preview: "/assets/img/brand/she-flutter-mark-black.svg",
      files: [{ label: "SVG", src: "/assets/img/brand/she-flutter-mark-black.svg", file: "She-Flutter-wordmark-black.svg" }],
    },
  ],
};
