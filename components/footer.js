export default function Footer() {
  return (
    <footer className="flex justify-between p-6 bg-gray-200 ">
      <div>
        <p className="inline-block">Copyright {new Date().getFullYear()}</p>{" "}
        <p className="inline-block">Eleazar Morelli Sangil</p>
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
