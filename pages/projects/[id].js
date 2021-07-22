import Head from "next/head";
import Layout from "../../components/layout";
import { getAllProjectIds, getProjectData } from "../../lib/projects";
import Image from "next/image";

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}

export default function Project({ projectData }) {
  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>

      <article
        className="mx-auto
        max-w-screen-sm
        md:max-w-screen-md"
      >
        <h2 className="text-4xl font-bold px-12 py-10">{projectData.title}</h2>

        <div className="relative h-96 w-96 mx-auto rounded-md overflow-hidden shadow-lg">
          <Image src={projectData.screenshot} layout="fill" />
        </div>

        <main className="px-12 py-8">
          <div className="prose md:prose-xl" dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
        </main>
      </article>
    </Layout>
  );
}
