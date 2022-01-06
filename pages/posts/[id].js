import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

// given params below which contains id (bc the file name has the brackets around id - that's how Next knows its a dynamic route)
// had to add await below since we added it in the getPostData function
export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}
// The post page is now using the getPostData function in getStaticProps to get the post data and return it as props

// paths contains the array of known paths returned by getAllPostIds(), which include the params defined by pages/posts/[id].js
export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export default function Post({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className={utilStyles.headingXl}>{postData.title}</h1>
				<div className={utilStyles.lightText}>
					<Date dateString={postData.date} />
				</div>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</Layout>
	);
}

// if using TS...
// import { GetStaticProps, GetStaticPaths } from 'next'

// export default function Post({
//   postData
// }: {
//   postData: {
//     title: string
//     date: string
//     contentHtml: string
//   }
// }) {
//   return (
//     <Layout>
//       <Head>
//         <title>{postData.title}</title>
//       </Head>
//       <article>
//         <h1 className={utilStyles.headingXl}>{postData.title}</h1>
//         <div className={utilStyles.lightText}>
//           <Date dateString={postData.date} />
//         </div>
//         <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
//       </article>
//     </Layout>
//   )
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = getAllPostIds()
//   return {
//     paths,
//     fallback: false
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const postData = await getPostData(params.id as string)
//   return {
//     props: {
//       postData
//     }
//   }
// }
