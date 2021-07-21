import About from "../components/about";
import Contact from "../components/contact";
import Layout from "../components/layout";
import Intro from "../components/intro";

export default function Home() {
  return (
    <Layout>
      <Intro />

      <About />

      <Contact />
    </Layout>
  );
}
