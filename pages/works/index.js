import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/date";

export async function getStaticProps() {
  const worksData = getSortedPostsData();
  return {
    props: {
      worksData,
    },
  };
}

export default function Pepe({ worksData }) {
  return (
    <Layout>
      <section>
        <h2>Works</h2>
        <h3>Some of my works</h3>
        <ul>
          {worksData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`works/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
