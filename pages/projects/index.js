import Layout from "../../components/layout";
import { getSortedProjectsData } from "../../lib/projects";
import Link from "next/link";
import Image from "next/image";
import Date from "../../components/date";

export async function getStaticProps() {
  const projectsData = getSortedProjectsData();
  return {
    props: {
      projectsData,
    },
  };
}

export default function Projects({ projectsData }) {
  return (
    <Layout>
      <section>
        <h2 className="text-4xl font-bold">Proyectos</h2>
        <h3 className="text-xl">Algunos de los trabajos que realicé</h3>

        <div className="grid grid-cols-3 gap-4">
          {projectsData.map(({ id, title, summary, screenshot }) => (
            <div key={id} className="bg-white rounded overflow-hidden shadow">
              <Link href={`projects/${id}`}>
                <div>
                  <Image src={screenshot} height="400" width="400" />
                  <p className="text-center my-2 font-bold">{title}</p>
                  <p className="m-2 text-sm">{summary}</p>
                </div>
              </Link>
              <br />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
