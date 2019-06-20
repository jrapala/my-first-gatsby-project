import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/molecules/About"
import Projects from "../components/molecules/Projects"
import Writing from "../components/molecules/Writing"
import Email from "../components/molecules/Email"

const IndexPage = () => (
	<Layout>
		<SEO
			title="Juliette Rapala"
			keywords={[
				`juliette rapala`,
				`javascript`,
				`developer`,
				`react`,
				`react native`,
			]}
		/>
		<About />
		<Projects />
		<Writing />
		<Email />
	</Layout>
)

export default IndexPage
