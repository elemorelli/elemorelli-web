import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Ele Morelli's personal web" />
        <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI("Ele Morelli's personal web")}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
        <meta name="og:title" content="Ele Morelli" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div>
        <div>
          <Link href="/">Ele Morelli</Link>
        </div>
        <nav>
          <ol>
            <li>
              <Link href="/works">
                Works
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <a href="https://github.com/elemorelli">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/elemorelli/">
                Linkedin
              </a>
            </li>
          </ol>
        </nav>

        <main>{children}</main>

        <footer>Copyright blabla</footer>
      </div>
    </div>
  )
}