import { useEffect } from "react";
import Layout from "../components/layout";

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

const iterateTypingWords = async () => {
  const textPrompt = document.getElementById("text-prompt");
  const words = ["programador full-stack", "viajero.", "entusiasta de la impresión 3D.", "desarrollador web."];

  for (let index = 0; ; index++) {
    if (index === words.length) {
      index = 0;
    }
    await new Promise(async (resolve) => {
      selectTextPrompt(textPrompt);
      await sleep(250);

      clearTextPrompt(textPrompt);
      await sleep(250);

      await typeTextPrompt(textPrompt, words[index]);
      await sleep(2000);
      resolve();
    });
  }
};

export default function Home() {
  useEffect(() => {
    iterateTypingWords();
  }, []);

  return (
    <Layout>
      <section className="text-gray-800">
        <h1 className="text-6xl text-center">Hola!</h1>
        <h2 className="text-4xl text-center">Soy Eleazar. Soy un</h2>
        <p className="text-xl text-center font-mono">
          <span id="text-prompt">desarrollador web.</span>
          <span className="inline-block animate-blink">|</span>
        </p>
      </section>

      <section>
        <p>blablabla</p>
      </section>

      <section>
        <p>Contacto!</p>
      </section>
    </Layout>
  );
}
