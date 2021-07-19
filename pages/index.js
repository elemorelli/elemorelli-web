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
  const words = [
    "programador full-stack.",
    "motociclista novato.",
    "entusiasta de la impresión 3D.",
    "viajero.",
    "gamer cuando sobra tiempo.",
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
    iterateTypingWords();
  }, []);

  return (
    <Layout>
      <section className="text-gray-800 h-screen">
        <h1 className="text-6xl text-center">Hola!</h1>
        <h2 className="text-4xl text-center">Soy Eleazar. Soy un</h2>
        <p className="text-xl text-center font-mono">
          <span id="text-prompt">desarrollador web.</span>
          <span className="inline-block animate-blink">|</span>
        </p>
      </section>

      <section className="h-screen bg-gray-400">
        <p className="mb-10">
          Lorem ipsum dolor sit amet, his id sapientem scribentur, quod cetero fastidii eos ex. Cum delectus temporibus
          cu, his hinc inciderint delicatissimi at. Fierent epicurei legendos an usu, in quaerendum reprehendunt nec. Eu
          mea fierent neglegentur, an est commune aliquando deterruisset, nec ad veniam dictas blandit.
        </p>
        <p className="mb-10">
          Ne eos patrioque voluptatum. Vix zril utroque ut. Idque decore pro ut. Ex aliquam deleniti mei. Pri in
          eleifend persecuti ullamcorper, eripuit admodum qui cu.
        </p>
        <p>
          Duo at dolore insolens explicari. An vis sint cotidieque consequuntur, an mutat vivendo eam. An modo platonem
          omittantur vis, nisl vituperata ei cum. Veritus persequeris pro te, ea pro iudicabit conclusionemque. Vix
          veritus accusamus cu, ne qui vide vituperatoribus, probatus partiendo consulatu nam eu.
        </p>
      </section>

      <section id="contact" className="h-60">
        <h2>Charlemos!</h2>
        <p>Interesado en trabajar conmigo? Contame sobre tu proyecto y vemos que se puede hacer.</p>
        <form method="post">
          <label>
            Nombre <input type="text" name="name" required />
          </label>

          <label>
            Email <input type="email" name="email" required />
          </label>

          <label>
            Teléfono <input type="phone" name="phone" />
          </label>

          <label>
            Website <input type="text" name="website" />
          </label>

          <label>
            Website <textarea name="message" required></textarea>
          </label>

          <input type="submit" value="Enviar!"></input>
        </form>
      </section>
    </Layout>
  );
}
