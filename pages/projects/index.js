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
        <h2>Projects</h2>
        <h3>Some of my projects</h3>
        <div>
          {projectsData.map(({ id, title, description, screenshot }) => (
            <div key={id} className="bg-white inline-flex rounded overflow-hidden shadow mx-2">
              <Link href={`projects/${id}`}>
                <div className="w-64">
                  <Image src={screenshot} height="256" width="256" />
                  <p className="text-center my-2 font-bold">{title}</p>
                  <p className="m-2 text-sm">{description}</p>
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
