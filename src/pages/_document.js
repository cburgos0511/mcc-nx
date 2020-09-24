import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="font-open-sans text-black font-normal text-base">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
