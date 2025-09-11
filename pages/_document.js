import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Mobile viewport */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        {/* Inline variables so the page has colors even if theme.css fails */}
        <style
          // DO NOT remove – this fixes iPhone “white page” when CSS vars are missing
          dangerouslySetInnerHTML={{
            __html: `
:root{
  color-scheme: dark;
  --bg:#0B0E12;
  --surface:#12161C;
  --text:#E8ECF1;
  --muted:#A7B0BB;
  --primary:#4CC38A;
  --accent:#7C91FF;
}
`,
          }}
        />
      </Head>
      {/* Hard hex fallbacks + use vars when present */}
      <body className="bg-[#0B0E12] text-[#E8ECF1]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

