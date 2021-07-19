import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/date";

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
      <section>
        <h2 className="text-4xl font-bold">Blog</h2>
        <h3 className="text-xl">Latest posts</h3>
        <ul>
          {postsData.map(({ id, date, title, summary }) => (
            <li key={id}>
              <Link href={`blog/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
              <div>{summary}</div>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
