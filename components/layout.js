import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="container max-w-4xl mx-auto text-gray-600">
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

      <header>
        <nav>
          <ol className="flex justify-end">
            <li className="mr-auto">
              <Link href="/">Ele Morelli</Link>
            </li>
            <li className="mx-2">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="mx-2">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="mx-2">
              <a href="https://github.com/elemorelli">GitHub</a>
            </li>
            <li className="mx-2">
              <a href="https://www.linkedin.com/in/elemorelli/">Linkedin</a>
            </li>
          </ol>
        </nav>
      </header>

      <main>{children}</main>

      <footer>Copyright blabla</footer>
    </div>
  );
}
