const app_name = 'MyMPS'
const portal = 'Portal MyMPS'
const app_full_name = 'Majlis Perbandaran Selayang'
const year = 2023


export const landingPage = {
	footer_icon: [
		{ id: 1, alt: `${app_full_name} website`, src: '', link: 'https://mps.gov.my/' },
		{ id: 2, alt: `${app_full_name} facebook`, src: '', link: 'https://www.facebook.com/mpselayang/' },
		{ id: 3, alt: `${app_full_name} twitter`, src: '', link: 'https://twitter.com/mpselayang/' },
		{ id: 4, alt: `${app_full_name} instagram`, src: '', link: 'https://www.instagram.com/mpselayang/' },
	],
	bm: {
		welcome: `Selamat Datang Ke ${app_name}`,
		title: `${app_name} merupakan sebuah gerbang pembayaran pelbagai bil`,
		section: [
			{ id: 1, title: 'Kemudahan untuk semua', subtitle: 'Pembayaran atas talian secara tidak langsung dapat meringankan beban orang ramai untuk membuat pembayaran cukai taksiran atas talian di mana-mana sahaja pada bila-bila masa sahaja.' },
			{ id: 2, title: 'Mersa Pengguna', subtitle: 'Dengan menggunakan teknologi yang terkini, sistem ini dihasilkan dengan mesra pengguna.' },
			{ id: 3, title: 'Pembayaran Lebih Pantas', subtitle: `Anda tidak perlu ke kaunter untuk membuat pembayaran malah anda boleh membuat pembayaran di atas talian dengan menggunakan sistem ${app_name} di mana sahaja anda berada pada bila-bila masa sahaja.` },
			{ id: 4, title: 'Pelbagai Platform', subtitle: 'Selain melayari di laman sesawang, anda boleh simpan sebagai satu aplikasi pintar di telefon anda.' },
			{ id: 5, title: 'Lebih Sistematik', subtitle: 'Antara salah satu kelebihan menggunakan sistem ialah urusan anda yang berkenaan dengan cukai taksiran lebih mudah diurus.' },
		],
		footer: {
			title: 'Kami sedia membantu anda untuk menguruskan dan memudahkan bayaran bil anda setiap hari.',
			info_title: 'Keterangan Lanjut',
			info: [
				{ id: 1, content: `Tentang ${app_name}`, link: '#' },
				{ id: 2, content: `Cara Penggunaan ${app_name}`, link: '#' },
				{ id: 3, content: 'Terma & Syarat', link: '#' },
				{ id: 4, content: 'Polisi Privasi', link: '#' },
				{ id: 5, content: 'Hubungi Kami', link: '#' },
			]
		},
		copyright: `Hak Cipta Terpelihara © ${year} ${app_full_name}`,
	},
	en: {
		welcome: `Welcome to ${app_name}`,
		title: `${app_name} is a multi-bill payment gateway`,
		section: [
			{ id: 1, title: 'Convenience for all', subtitle: 'Online payments can indirectly ease the burden of the public to make online assessment tax payments anywhere at any time.' },
			{ id: 2, title: 'User Friendly', subtitle: 'Using the latest technology, the system is produced in a user-friendly.' },
			{ id: 3, title: 'Faster Payment', subtitle: `You don't have to go to the counter to make a payment but you can make a payment online using the ${app_name} wherever you are at any time.` },
			{ id: 4, title: 'Multi Platform', subtitle: 'In addition to browsing the website, you can save it as a smart app on your phone.' },
			{ id: 5, title: 'More Systematic', subtitle: 'One of the advantages of using the system is that your matters related to bill are easier to manage.' },
		],
		footer: {
			title: 'We are ready to help you to manage and facilitate the payment of your bills every day.',
			info_title: 'More Information',
			info: [
				{ id: 1, content: `About ${app_name}`, link: '#' },
				{ id: 2, content: `Guide ${app_name}`, link: '#' },
				{ id: 3, content: 'Terms and Conditions', link: '#' },
				{ id: 4, content: 'Privacy Policy', link: '#' },
				{ id: 5, content: 'Contact Us', link: '#' },
			]
		},
		copyright: `Copyright Reserved © ${year} ${app_full_name}`,
	},
}