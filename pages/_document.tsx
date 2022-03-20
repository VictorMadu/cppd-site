import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html className="">
      <Head />
      <body
        className={`bg-neu-100 dark:bg-neu-800 text-neu-800/90 dark:text-neu-100/90 scroll-smooth`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
