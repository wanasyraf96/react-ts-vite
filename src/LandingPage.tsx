import React from 'react'

type LanguageType = {
	label: string,
	value: string,
}
interface LanguageButtonType {
	button: LanguageType[]
}
function LanguageButton({ button }: LanguageButtonType) {
	return <>
		{
			button.forEach(lang => {

				return <h1>Hello World</h1>
			})
			// button.forEach((lang) => {
			// 	'aaaa'
			// })
		}
	</>
}

const language = [
	{ label: 'bm', value: 'bm' },
	{ label: 'en', value: 'en' },
]

function NavBar() {
	return <>
		<div className="container uppercase">portal mymps</div>
		<LanguageButton button={language} />
	</>
}

function Footer() {
	return <>
		<div className="bg-gray-300">
			portal mymps
		</div>
	</>
}
const LandingPage = () => {
	return (
		<>
			<NavBar />
			<Footer />
		</>
	)
}

export default LandingPage