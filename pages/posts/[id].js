import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
	return (
		<Layout>
			{postData.title}
			<br />
			{postData.id}
			<br />
			{postData.date}
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
  console.log('debug ~ file: [id].js ~ line 18 ~ getStaticPaths ~ paths', paths);
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = getPostData(params.id);
  console.log('debug ~ file: [id].js ~ line 26 ~ getStaticProps ~ postData', postData);
	return {
		props: {
			postData,
		},
	};
}
