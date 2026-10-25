import { cpSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  // Lets the same build work at the github.io preview address (a sub-folder)
  // and at sheflutter.com (the root). The deploy workflow sets PATH_PREFIX.
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  // YouTube thumbnails saved by src/_data/youtube.js. They download during the build,
  // too late for a passthrough copy, so they're copied in once the build is done.
  eleventyConfig.on("eleventy.after", ({ directories }) => {
    if (existsSync(".cache/youtube")) cpSync(".cache/youtube", join(directories.output, "assets/video"), { recursive: true });
  });

  // Dates print in UTC so a post dated 2026-11-20 never shows as Nov 19.
  eleventyConfig.addFilter("readableDate", (d) =>
    new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })
  );
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("byLine", (books, line) => books.filter((b) => b.line === line));

  // Press page: "48 KB" for a file under src/ (empty until the file exists), and bio word counts.
  eleventyConfig.addFilter("fileSize", (url) => {
    if (!existsSync(`src${url}`)) return "";
    const bytes = statSync(`src${url}`).size;
    return bytes >= 1e6 ? `${(bytes / 1e6).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1e3))} KB`;
  });
  // Covers: "Summer and Fall 2004" -> "summer", the first season named, for the season colors.
  eleventyConfig.addFilter("seasonKey", (s) => (String(s).toLowerCase().match(/summer|fall|winter|spring/) || ["summer"])[0]);
  eleventyConfig.addFilter("wordCount", (text) => [].concat(text).join(" ").split(/\s+/).filter(Boolean).length);

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
