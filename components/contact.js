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
    <section id="contact" className="px-20 py-6">
      <h2 className="text-4xl py-4">Charlemos!</h2>
      <p className="text-xl pb-4">Interesado en trabajar conmigo?</p>
      <p className="text-xl pb-4">Contame sobre tu proyecto y vemos que se puede hacer.</p>

      <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <label className="col-span-2 md:col-span-1">
          Nombre* <input type="text" name="name" required className="w-full" />
        </label>

        <label className="col-span-2 md:col-span-1">
          Email* <input type="email" name="email" required className="w-full" />
        </label>

        <label className="col-span-2 md:col-span-1">
          Teléfono <input type="phone" name="phone" className="w-full" />
        </label>

        <label className="col-span-2 md:col-span-1">
          Website <input type="text" name="website" className="w-full" />
        </label>

        <label className="col-span-2">
          Mensaje* <textarea name="message" required className="w-full"></textarea>
        </label>

        <input className="col-span-2 w-6/12 m-auto" type="submit" value="Enviar!"></input>

        <p id="error-message"></p>
      </form>
    </section>
  );
}
