// /pages/api/feed/index.js
let Parser = require("rss-parser");
let parser = new Parser();
export default async (req, res) => {
  try {
    let feed = await parser.parseURL(
      "https://anchor.fm/s/121a932c/podcast/rss"
    );

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/xml; charset=utf-8");
    res.end(JSON.stringify(feed));
  } catch (e) {
    console.log(e);
    res.statusCode = 500;
    res.end();
  }
};
