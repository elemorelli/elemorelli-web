import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Ele Morelli's personal web" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            "Ele Morelli's personal web"
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content="Ele Morelli" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
