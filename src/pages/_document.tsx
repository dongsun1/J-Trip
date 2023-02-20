import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=c9f6e3011efbcabdb55a4eaab68d95c9&libraries=services,clusterer&autoload=false"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
