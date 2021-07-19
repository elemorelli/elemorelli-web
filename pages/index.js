import About from "../components/about";
import Contact from "../components/contact";
import Layout from "../components/layout";
import Presentation from "../components/presentation";

export default function Home() {

  return (
    <Layout>
      <Presentation />

      <About />

      <Contact />
    </Layout>
  );
}
