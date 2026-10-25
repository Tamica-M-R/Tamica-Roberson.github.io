// The Watch page's videos, read from the channel's public feed each time the site builds.
// The site also rebuilds every morning, so a new upload appears within a day.
//
// To feature Tamica's introduction at the top of the Watch page, paste its video ID into
// `intro` below: the part after "v=" in https://www.youtube.com/watch?v=VIDEO_ID
// (the video must be public). Until then the page says it's coming soon.
//
// Thumbnails are saved with the site, so a visitor's browser doesn't contact YouTube
// until they press play.

import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const channelId = "UCVcJB1ZYfNWsM0pddp96oKQ";
const channelUrl = "https://www.youtube.com/@SheFlutter";
const intro = { id: "", title: "Meet Tamica" };
const latestCount = 6;
const thumbDir = ".cache/youtube"; // copied to /assets/video/ after each build (see eleventy.config.js)

const decode = (s) =>
  s.replace(/&quot;/g, '"').replace(/&#39;/g, "’").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

// The newest 15 uploads, or none if YouTube can't be reached (the page still builds).
async function uploads() {
  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`, { signal: AbortSignal.timeout(10000) });
    if (!res.ok) return [];
    const xml = await res.text();
    return xml
      .split("<entry>")
      .slice(1)
      .map((entry) => ({
        id: entry.match(/<yt:videoId>([^<]+)</)?.[1],
        title: decode(entry.match(/<title>([^<]*)</)?.[1] ?? ""),
        published: entry.match(/<published>([^<]+)</)?.[1],
        short: entry.includes("youtube.com/shorts/"),
      }))
      .filter((v) => v.id);
  } catch {
    return [];
  }
}

// Saves a video's thumbnail once, trying the sizes in order. Returns its address on the site, or "".
async function thumbnail(id, sizes) {
  const file = `${thumbDir}/${id}.jpg`;
  for (const size of sizes) {
    if (existsSync(file)) break;
    try {
      const res = await fetch(`https://i.ytimg.com/vi/${id}/${size}.jpg`, { signal: AbortSignal.timeout(10000) });
      if (!res.ok) continue;
      mkdirSync(thumbDir, { recursive: true });
      writeFileSync(file, Buffer.from(await res.arrayBuffer()));
    } catch {
      // Try the next size.
    }
  }
  return existsSync(file) ? `/assets/video/${id}.jpg` : "";
}

export default async function () {
  const videos = await uploads();

  let featured = null;
  if (intro.id) {
    const fromFeed = videos.find((v) => v.id === intro.id) ?? {};
    featured = { ...intro, ...fromFeed, thumb: await thumbnail(intro.id, ["maxresdefault", "sddefault", "hqdefault"]) };
  }

  const latest = [];
  for (const v of videos.filter((v) => v.id !== intro.id).slice(0, latestCount)) {
    latest.push({ ...v, thumb: await thumbnail(v.id, ["hqdefault"]) });
  }

  return { channelUrl, subscribeUrl: `${channelUrl}?sub_confirmation=1`, featured, latest };
}
