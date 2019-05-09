import Typography from "typography"

const typography = new Typography({
	googleFonts: [
		{
			name: "PT Sans",
			styles: ["200", "400"],
		},
		{
			name: "Didact Gothic",
			styles: ["200", "400"],
		},
	],
	baseFontSize: "21px",
	baseLineHeight: 1.666,
	headerFontFamily: ["PT Sans", "sans-serif"],
	headerWeight: "200",
	bodyFontFamily: ["Didact Gothic", "serif"],
})

export default typography
