import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/molecules/About"
import Projects from "../components/molecules/Projects"
import Email from "../components/molecules/Email"

const IndexPage = () => (
	<Layout>
		<SEO
			title="Juliette Rapala"
			keywords={[`juliette rapala`, `javascript`, `developer`]}
		/>
		<About />
		<Projects />
		<Email />
	</Layout>
)

export default IndexPage
