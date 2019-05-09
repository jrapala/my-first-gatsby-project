module.exports = {
	siteMetadata: {
		title: `Juliette Rapala`,
		tagline: `I build JavaScript apps for the web, mobile, and desktop`,
		description: `I build JavaScript apps for the web, mobile, and desktop`,
		author: `@jrapala`,
		social: {
			twitter: `julietter`,
			linkedin: `julietterapala`,
			github: `jrapala`,
		},
		about: `<p>I'm a software developer for <a href='http://www.eventric.com' alt="Eventric" target='_blank' rel='noopener noreferrer'>Eventric</a>.</p>
    <p>Eventric is the leading SaaS developer of live event and tour management software solutions. We power efficiency and measurable bottom-line profitability for event production and tour management. We’ve designed and cultivated our web, mobile, and cloud solutions Master Tour and Live Access to precisely benefit the needs of the top professionals across music, tv/film, sports, production, corporate, and touring industries.</p>`,
		portfolio: [
			{
				title: "Reaction Radio",
				description: `Spotify’s API provides a multitude of information about their library of songs, including measures of audio features, such as song valence (or as we like to call it, "positivity") and song energy. These features can correlate with mood. A song high on the valence and energy scales is going to be happy!
          Reaction Radio allows you create a playlist of songs, see how they fall on a mood chart, and then lets you edit and sort by mood. Once you have a playlist that you are satisfied with, you can easily export it to your Spotify account.`,
				link: "https://reaction-radio.herokuapp.com/",
			},
			{
				title: "The Chicago Doula Project [WIP]",
				description: `The Chicago Doula Project is a  <a href="https://github.com/chihacknight" alt="ChiHackNight" target="_blank" rel='noopener noreferrer'>@chihacknight</a> creation that is helping connect Chicago-based women with a doulas to provide support during pregnancy, childbirth, and postpartum period.`,
				link: "https://chicago-doula-project.herokuapp.com/",
			},
		],
		footer: `Juliette Rapala`,
		email: `<p>Send me a note!<br/><a href="mailto:hello@julietterapala.com">hello@julietterapala.com</a></p>`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-plugin-styled-components`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Juliette Rapala`,
				short_name: `jrapala`,
				start_url: `/`,
				background_color: `#F4E11E`,
				theme_color: `#F4E11E`,
				display: `minimal-ui`,
				icon: `src/images/tada.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
