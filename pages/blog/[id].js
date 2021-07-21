import Head from "next/head";
import Date from "../../components/date";
import Layout from "../../components/layout";
import ReadingTime from "../../components/readingTime";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article
        className="mx-auto
        max-w-screen-sm
        md:max-w-screen-md"
      >
        <h2 className="text-4xl font-bold px-12 py-10">{postData.title}</h2>
        <main className="px-12">
          <div className="flex justify-between py-4">
            <Date dateString={postData.date} />
            <ReadingTime minutes={postData.readingTime} />
          </div>
          <div className="prose md:prose-xl" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </main>
      </article>
    </Layout>
  );
}
