import Input from "./input";
import TextArea from "./text-area";

export default function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      document.getElementById("error-message").textContent = "";

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: event.target.name.value,
          email: event.target.email.value,
          phone: event.target.phone.value,
          website: event.target.website.value,
          message: event.target.message.value,
        }),
      });

      if (res.status === 200) {
        await res.json();
        event.target.reset();
        document.getElementById("error-message").textContent = "Mensaje enviado!";
      } else {
        document.getElementById("error-message").textContent = "Algo sucedió...";
      }
    } catch (error) {
      document.getElementById("error-message").textContent = "Algo sucedió...";
    }
  };

  return (
    <section id="contact" className="px-20 py-6 bg-gray-300 mx-auto
      max-w-screen-sm
      md:max-w-screen-md">
      <h2 className="text-4xl py-4">Charlemos!</h2>
      <p className="text-xl pb-4">Interesado en trabajar conmigo?</p>
      <p className="text-xl pb-8">Contame sobre tu proyecto y vemos que se puede hacer.</p>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-6"
      >
        <Input name="name" type="text" text="Nombre" />

        <Input name="email" type="email" text="Email" />

        <TextArea name="message" text="Mensaje" />

        <input
          className="col-span-2 w-4/12 h-10 m-auto border-2 rounded-xl shadow text-xl
          bg-blue-500 border-blue-700 text-gray-200
          active:bg-blue-700"
          type="submit"
          value="Enviar!"
        ></input>

        <p id="error-message"></p>
      </form>
    </section>
  );
}
