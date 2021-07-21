export default function Footer() {
  return (
    <footer className="flex justify-between px-6 py-2 ">
      <p>Copyright {new Date().getFullYear()} Eleazar Morelli Sangil</p>
      <ul className="flex justify-between w-52">
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
