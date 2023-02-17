import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          type="text/javascript"
          src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=8t22f7uw4e"
        ></script>
      </body>
    </Html>
  );
}
