import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="flex justify-between px-6 py-4 text-lg bg-blue-500 border-b-8 border-blue-700 text-gray-200">
        <h1 className="">
          <Link href="/">Ele Morelli</Link>
        </h1>
        <ul className="flex justify-between w-40 sm:w-64">
          <li className="hover:underline">
            <Link href="/projects">Proyectos</Link>
          </li>
          <li className="hover:underline">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover:underline hidden sm:block">
            <Link href="/#contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
