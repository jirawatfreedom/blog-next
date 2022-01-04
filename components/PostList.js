import Link from 'next/link'
export default function PostList({ posts }) {

	console.log(posts)
	if (!posts === 'undefinded') return null

	return (
		<div>
			{!posts && <div>No posts!</div>}
			<ul role="list" className="divide-y divide-gray-200">
				{posts && posts.map((post, index) => {
					return (
						<li key={post.slug} className="py-4">
							<Link href={{ pathname: `/post/${post.slug}` }}>

								<a className="underline">
									{index+1}.
									{post.frontmatter.title}
								</a>
							</Link>

						</li>
					)
				})}
			</ul>
			
		</div>
	)
}