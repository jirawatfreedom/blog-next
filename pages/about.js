import Layout from '../components/Layout'
const About = ({ title, description, ...props }) => {
	return (
		<>
			<Layout pageTitle={`${title} | About`} description={description}>
				<h1 className="title">Welcome to my blog</h1>
				<p className="description">
					{description}
				</p>
				<p>
					Lorem ipsum dolor sit amet, con
				</p>

			</Layout>
		</>
	)
}
export default About