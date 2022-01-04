import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown';

import Layout from '../../components/Layout'

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
	if (!frontmatter) return <></>
	return (
		<Layout pageTitle={`${siteTitle} ${frontmatter.title}`}>
			<Link href="/">
				<a className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Back to post</a>
			</Link>
			<article>
				<h1>{frontmatter.title}</h1>
				<p>{frontmatter.author}</p>
				<div>
					<ReactMarkdown children={markdownBody} />
				</div>
			</article>
		</Layout>
	)
}
export async function getStaticProps({ ...ctx }) {
	const { postname } = ctx.params
	const content = await import(`../../posts/${postname}.md`)
	const config = await import(`../../sideconfig.json`)
	const data = matter(content.default)
	return {
		props: {
			siteTitle: config.title,
			frontmatter: data.data,
			markdownBody: data.content
		}
	}
}
export async function getStaticPaths() {
	const blogSlugs = ((context) => {
		const keys = context.keys()
		const data = keys.map((key, index) => {
			let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
			return slug
		})
		return data
	})(require.context('../../posts', true, /\.md$/))

	const paths = blogSlugs.map((slug) => `/post/${slug}`)

	return {
		paths,
		fallback: false,
	}

}