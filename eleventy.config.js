import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  // Lets the same build work at the github.io preview address (a sub-folder)
  // and at sheflutter.com (the root). The deploy workflow sets PATH_PREFIX.
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Dates print in UTC so a post dated 2026-11-20 never shows as Nov 19.
  eleventyConfig.addFilter("readableDate", (d) =>
    new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })
  );
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("byLine", (books, line) => books.filter((b) => b.line === line));

  // Journal posts: every .md file in src/journal, newest first. Set `draft: true` to hide one.
  eleventyConfig.addCollection("journal", (api) =>
    api
      .getFilteredByGlob("src/journal/*.md")
      .filter((p) => !p.data.draft)
      .sort((a, b) => b.date - a.date)
  );

  return {
    pathPrefix: process.env.PATH_PREFIX || "/",
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
