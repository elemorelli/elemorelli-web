import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between p-6 bg-blue-500 border-t-8 border-blue-700 text-gray-200 ">
      <div>
        <p>Eleazar Morelli Sangil | {new Date().getFullYear()}</p>
      </div>
      <div>
        <Link href="#">Volver ↑</Link>
      </div>
      <ul className="flex justify-between items-center w-52">
        <li>
          <a href="https://github.com/elemorelli">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/elemorelli/">Linkedin</a>
        </li>
        <li>
          <a href="https://twitter.com/ele_morelli/">Twitter</a>
        </li>
      </ul>
    </footer>
  );
}
