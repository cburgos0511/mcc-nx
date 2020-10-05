// /pages/api/feed/index.js
export default async (req, res) => {
  let feed = "";

  try {
    feed = `<feed xmlns="http://www.w3.org/2005/Atom" xmlns:thr="http://purl.org/syndication/thread/1.0" xml:lang="en-GB" xml:base="https://example.com/api/feed/">
    <title type="text">My site</title>
    <subtitle type="text">A quick description of your site.</subtitle>
    <updated>2020-05-16T11:21:22Z</updated>
    <link rel="alternate" type="text/html" href="https://example.com/"/>
    <id>https://example.com/api/feed/</id>
    <link rel="self" type="application/atom+xml" href="https://example.com/api/feed/"/>
    <generator uri="https://ironeko.com version="1.0.0">Ironeko</generator>
  </feed>`;
    // console.log(feed);

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/xml; charset=utf-8");
    res.end(JSON.stringify(feed));
  } catch (e) {
    console.log(e);
    res.statusCode = 500;
    res.end();
  }
};
