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
      <section className="pt-10">
        <h2 className="text-4xl font-bold p-4">Proyectos</h2>
        <h3 className="text-xl p-4">Algunos de los trabajos en los que trabajé</h3>

        <div className="grid grid-cols-3 gap-6 px-6">
          {projectsData.map(({ id, title, summary, screenshot }) => (
            <Link href={`projects/${id}`}>
              <div
                key={id}
                className="bg-white rounded-lg overflow-hidden shadow-xl cursor-pointer
                col-span-3
                md:col-span-1"
              >
                <div className="grid grid-cols-3">
                  <div
                    className="relative h-48
                    col-start-1 col-end-2
                    md:col-start-1 md:col-end-4"
                  >
                    <Image src={screenshot} layout="fill"/>
                  </div>
                  <div
                    className="flex flex-col px-4
                    col-start-2 col-end-4
                    md:col-start-1 md:col-end-4"
                  >
                    <p className="text-center my-2 font-bold">{title}</p>
                    <p className="m-2 text-sm">{summary}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
