import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/date";
import ReadingTime from "../../components/readingTime";

export async function getStaticProps() {
  const postsData = getSortedPostsData();
  return {
    props: {
      postsData,
    },
  };
}

export default function Blog({ postsData }) {
  return (
    <Layout>
      <section
        className="mx-auto
        max-w-screen-sm
        md:max-w-screen-md"
      >
        <h2 className="text-4xl font-bold p-4 mb-6">Blog</h2>
        <ul className="mx-8">
          {postsData.map(({ id, date, title, summary, readingTime }) => (
            <li key={id} className="mb-12">
              <a className="text-2xl underline">
                <Link href={`blog/${id}`}>{title}</Link>
              </a>
              <div className="flex justify-between py-4">
                <Date dateString={date} />
                <ReadingTime minutes={readingTime} />
              </div>
              <div>{summary}</div>
              <a className="underline mt-4">
                <Link href={`blog/${id}`}>Leer más</Link>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
