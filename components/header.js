import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="flex justify-between px-6 py-4 text-lg">
        <h1 className="">
          <Link href="/">Ele Morelli</Link>
        </h1>
        <ul className="flex justify-between w-64">
          <li>
            <Link href="/projects">Proyectos</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/#contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
