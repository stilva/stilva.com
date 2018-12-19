export default new Map([
	['supercell', {
		label: 'Supercell',
		content: [
			{
				type: 'Paragraph',
				title: 'Overview',
				content: [
					`Since late 2015 firstborn has been handling a lot of Supercell's non-game web presence, with project such as
				Clash of clans website, clash royale's blog site, supercell's merchandise e-commerce store etc. Starting with Supercell's Boombeach game, 
				we got the chance to be in charge of building their inboxes: in-game news platform.`,
					`In late 2018, we've built a e-sport fantasy deck submission platform which amassed 6M+ submissions form gamers around the world.`
				]
			},
			{
				type: 'Paragraph',
				title: 'My role',
				content: [
					`Almost from day one, I've been involved with a lot of the projects with Supercell, as a lead or senior developer.`,
					`I've successfully lead the front-end development for the internationalisation of the Clash Royale blog, followed by the Clash of Clans website, our first in-game news platform, the shopify based e-commerce website along multiple developer tools.`,
					`I was also in charge of the building the backend (AWS lambda based) for a campaign to generate custom videos for millions of users. In 2018, I built the front-end for an e-sport fantasy deck submission, which gathered 6M+ votes within 2 weeks.`
				]
			},
			{
				type: 'Paragraph',
				title: 'Tech notes',
				content: [
					`I've chosen preact over react over react in many of the projects, due to its smaller foot-print. For the same reasons I've picked Rollup as our go-to bundler for the inboxes. All front-end unit tests are written with jest.`,
					`For the e-commerce website, I've written a lot of custom tools for better DX with shopify – per dev theme deployment on our CI server, better browser reload with Shopify etc.`
				]
			},
		]
	}],
	['spglobal', {
		label: 'S&P Global',
		content: [
			{
				type: 'Paragraph',
				title: 'Overview',
				content: [
					`Firstborn was tasked to modernise S&P Global’s fragmented ecosystem into a fully connected digital customer experience, across all their products and divisions.`
				]
			},
			{
				type: 'Paragraph',
				title: 'My role',
				content: [
					`Firstborn was in charge of designing, prototyping and developing the UI – while the backend and the integration was to be done by a third party.`,
					`As the front-end lead I was tasked to build a patternlab based high fidelity prototype.`
				]
			},
			{
				type: 'Paragraph',
				title: 'Tech notes',
				content: [
					`The high fidelity prototype was built atop Patternlab, SCSS, jQuery, and Foundation's components.`,
					`SSR was out of the question given the doubts over which platform and CMS the final product would be built on.`
				]
			},
		]
	}],
	['mtndew', {
		label: 'Mountain Dew',
		content: [
			{
				type: 'Paragraph',
				title: 'Overview',
				content: [
					`Firstborn has long been in charge of Mountain Dew's web campaigns – from small scale to superbowl campaign scale websites.`
				]
			},
			{
				type: 'Paragraph',
				title: 'My role',
				content: [
					`While at firstborn, I've lead multiple Mountain Dew projects, such as kickstart 2016 (Puppy Monkey Baby), the Dew label VR project, the "Q4" projects, etc.`
				]
			},
			{
				type: 'Paragraph',
				title: 'Tech notes',
				content: [
					`Kickstart 2016 – react was used for this single page app, while the pipeline for pre-generating the few thousands of gifs from the static images from the content sudio was built with node.js, imagemagick and gifsicle.`,
					`Dew label VR project – The VR video player for Samsung Galaxy was built in Java with Samsung's SDK`,
					`Q4 projects – the 2015 version used react.js, rxjs, and clmtracker, while the 2016 version was based on react.js and rxjs`
				]
			},
		]
	}],
	['more', {
		label: 'Other clients',
		content: [
			{
				type: 'Paragraph',
				title: 'Chevron',
				date: '2017',
				content: [
					`Chevron tasked firstborn to build an educational VR experience to show the St Malo deepwater oil project .`,
					`I built a socket server that synchronised 50 Samsung VR headsets – initially built with firebase, then okHttp3 to connect to an express.js based node.js server. The VR was built atop Mountain Dew's VR project, which was built on top of Samsung VR SDK`
				]
			},
			{
				type: 'Picture',
				title: 'Hello',
				urls: [
					['768', ['/images/chevron/desktop.png']],
					['425', ['/images/chevron/tablet.png', '/images/chevron/desktop.png']],
					['0', ['/images/chevron/small.png', '/images/chevron/small-retina.png']],
					['preview', '/images/chevron/preview.png'],
				]
			},
			{
				type: 'Paragraph',
				title: 'AWW online',
				date: '2014',
				content: [
					`In an effort to strengthen their online precense, Bauer Media had decided to move their wide range of Australian magazines online.`,
					`I was part of a larger team that worked on the react.js based platform – while focusing on Australian Women's Weekly`
				]
			},
			{
				type: 'Picture',
				title: 'Hello',
				urls: [
					['768', ['/images/aww/desktop.png']],
					['425', ['/images/aww/tablet.png', '/images/aww/desktop.png']],
					['0', ['/images/aww/small.png', '/images/aww/small-retina.png']],
					['preview', '/images/aww/preview.png'],
				]
			},
			{
				type: 'Paragraph',
				title: 'Fox Johnston',
				date: '2011',
				awards: [
					`Awwwards`,
					`ADGA`
				],
				content: [
						`Coming off of Flash, this was one of my first few Javascript project with wordpress as the CMS, along a custom plugin to output everything as JSON.`,
						`Cufón was used for the webfonts, OBJS was used for `
				]
			},
			{
				type: 'Picture',
				title: 'Hello',
				urls: [
					['768', ['/images/foxjohnston/desktop.png']],
					['425', ['/images/foxjohnston/tablet.png', '/images/foxjohnston/desktop.png']],
					['0', ['/images/foxjohnston/small.png', '/images/foxjohnston/small-retina.png']],
					['preview', '/images/foxjohnston/preview.png'],
				]
			},
			{
				type: 'Paragraph',
				title: 'JWI Louvres',
				date: '2011',
				awards: [
					`Awwwards`,
					`ADGA`
				],
				content: [
						``
				]
			},
			{
				type: 'Picture',
				title: 'Hello',
				urls: [
					['768', ['/images/jwi/desktop.png']],
					['425', ['/images/jwi/tablet.png', '/images/jwi/desktop.png']],
					['0', ['/images/jwi/small.png', '/images/jwi/small-retina.png']],
					['preview', '/images/jwi/preview.png'],
				]
			}
		]
	}]
]);