import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <h1>
          <Link href="/">Ele Morelli</Link>
        </h1>
        <ul className="flex justify-end">
          <li className="mx-2">
            <Link href="/projects">Proyectos</Link>
          </li>
          <li className="mx-2">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="mx-2">
            <Link href="/#contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
