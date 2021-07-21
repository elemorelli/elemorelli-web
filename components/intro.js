import Link from "next/link";
import { useEffect } from "react";

function sleep(ms = 150) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const selectTextPrompt = async (element) => {
  element.className = "bg-blue-300 text-white";
};

const clearTextPrompt = async (element) => {
  element.className = "";
  element.textContent = "";
};

const typeTextPrompt = async (element, text) => {
  for (const letter of text.split("")) {
    await sleep();
    element.append(letter);
  }
};

const typingWordsLoop = async () => {
  const textPrompt = document.getElementById("text-prompt");
  const words = [
    "programador full-stack.",
    "motociclista.",
    "entusiasta de la impresión 3D.",
    "viajero.",
    "desarrollador web.",
  ];

  for (let index = 0; ; index++) {
    await sleep(2500);
    if (index === words.length) {
      index = 0;
    }
    await new Promise(async (resolve) => {
      selectTextPrompt(textPrompt);
      await sleep(250);

      clearTextPrompt(textPrompt);
      await sleep(250);

      await typeTextPrompt(textPrompt, words[index]);
      resolve();
    });
  }
};

export default function Intro() {
  useEffect(() => {
    // typingWordsLoop();
  }, []);

  return (
    <section className="text-gray-800 h-screen bg-center bg-cover flex items-center">
      {/* bg-hero */}
      <div className="w-full">
        <h1 className="text-6xl text-center mb-4">Hola!</h1>
        <h2 className="text-4xl text-center mb-4">Me llamo Eleazar.</h2>
        <p className="text-xl text-center mb-8">
          <span>Soy un </span>
          <span id="text-prompt" className="font-mono">
            desarrollador web.
          </span>
          <span className="inline-block animate-blink font-mono">|</span>
        </p>
        <div className="flex justify-center">
          <Link href="/#contact">
            <button className="text-center border-2 border-black rounded-full cursor-pointer px-4 py-2">
              Estoy aceptando nuevos proyectos
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
