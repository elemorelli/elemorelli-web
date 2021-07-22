import Layout from "../../components/layout";
import { getSortedProjectsData } from "../../lib/projects";
import Link from "next/link";
import Image from "next/image";

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
      <section
        className="mx-auto
        max-w-screen-sm
        md:max-w-screen-md"
      >
        <h2 className="text-4xl font-bold px-12 py-10">Proyectos</h2>

        <div className="grid grid-cols-2 gap-6 px-12">
          {projectsData.map(({ id, title, summary, screenshot }) => (
            <div
              key={id}
              className="bg-white rounded-lg overflow-hidden shadow-xl h-64
                col-span-2
                md:col-span-1 md:h-96"
            >
              <div
                className="grid grid-cols-2
                h-64
                md:h-96"
              >
                <div
                  className="relative
                    col-start-1 col-end-2
                    md:col-start-1 md:col-end-3 md:h-48"
                >
                  <Link href={`projects/${id}`}>
                    <Image src={screenshot} layout="fill" className="object-cover cursor-pointer" />
                  </Link>
                </div>

                <div
                  className="flex flex-col px-4 
                    col-start-2 col-end-3
                    md:col-start-1 md:col-end-3"
                >
                  <p className="text-center py-2 font-bold hover:underline">
                    <Link href={`projects/${id}`}>{title}</Link>
                  </p>
                  <p className="px-2 text-sm overflow-hidden overflow-ellipsis">{summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
