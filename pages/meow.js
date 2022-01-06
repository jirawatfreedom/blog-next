import fetch from 'isomorphic-unfetch'
const Meow = ({ meow }) => {



	// console.log(file)
	return <img src={meow.file} />
}
// Meow.getInitialProps = async () => {
// 	const res = await fetch('https://aws.random.cat/meow')
// 	const data = await res.json()
// 	console.log(data)
// 	return data
// }
export default Meow


export async function getStaticProps() {
	const res = await fetch('https://aws.random.cat/meow')
	
	const data = await res.json()
	console.log(data)
	// return data
	return {
		props: {
			meow:data || {}
		}
	}
}