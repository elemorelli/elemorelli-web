import Head from "next/head";
import Layout from "../../components/layout";
import { getAllProjectIds, getProjectData } from "../../lib/projects";

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
      <article>
        <h2 className="text-4xl font-bold">{projectData.title}</h2>
        <div>
          <Date dateString={projectData.date} />
        </div>
        <br/>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </article>
    </Layout>
  );
}
