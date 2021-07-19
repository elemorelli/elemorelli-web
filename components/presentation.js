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

export default function Presentation() {
  useEffect(() => {
    typingWordsLoop();
  }, []);

  return (
    <section className="text-gray-800 h-screen">
      <h1 className="text-6xl text-center">Hola!</h1>
      <h2 className="text-4xl text-center">Soy Eleazar. Soy un</h2>
      <p className="text-xl text-center font-mono">
        <span id="text-prompt">desarrollador web.</span>
        <span className="inline-block animate-blink">|</span>
      </p>
    </section>
  );
}
