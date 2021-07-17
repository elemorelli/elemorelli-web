import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <section className="text-gray-800">
        <h1 className="text-6xl">Hola!</h1>
        <h2 className="text-4xl">Soy Eleazar. Me especializo en</h2>
        <p className="text-xl">desarrollo web.</p>
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
