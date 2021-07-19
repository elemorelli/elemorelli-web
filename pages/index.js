import { useEffect } from "react";
import About from "../components/about";
import Contact from "../components/contact";
import Layout from "../components/layout";
import Presentation from "../components/presentation";

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
    "motociclista novato.",
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

export default function Home() {
  useEffect(() => {
    typingWordsLoop();
  }, []);

  return (
    <Layout>
      <Presentation />

      <About />

      <Contact />
    </Layout>
  );
}
