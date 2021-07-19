export default function Contact() {
  return (
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
  );
}
