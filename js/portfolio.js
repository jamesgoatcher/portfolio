const portfolioEl = document.querySelector('#main_portfolio');
const portfolio = {
	heavensonfire: {
		name: 'Heaven‘s On Fire',
		href: 'http://jamesgoatcher.com/heavensonfire',
		sort: 1,
		content: `<div class='block mb-xs'>ECMA6, PHP, UI/UX Design.</div>Travel blog with reusable architecture that documents my world travels.`
	},
	create2: {
		name: 'Xaxis - Create 2',
		href: 'http://jamesgoatcher.com/pages/xal_create_2',
		sort: 2,
		content: `<div class='block mb-xs'>ECMA6, BEM CSS, 8bit Design</div>Second iteration of the Xaxis AdLabs industry newsletter meant to showcase the creative wing of the company. Inspired by Bandersnatch and 8bit gaming, the user is presented with questions that result in a unique personality based experience. I developed the entire project solo with assets created by our graphic designer. Time constraints were tight so some interesting features were omitted.`
	},
	widgets: {
		name: 'Widgets',
		href: 'http://jamesgoatcher.com/widgets',
		sort: 3,
		content: `<div class='block mb-xs'>ECMA6, UI/UX Design</div>A compilation of smaller scale programs in one digestable suite. I like to think of this as my own hosted codepen.io.`
	},
	inventory: {
		name: 'Inventory',
		href: 'http://jamesgoatcher.com/inventory',
		sort: 4,
		content: `<div class='block mb-xs'>ECMA6, UI/UX Design</div>I have a lot of interests that help define me and many of them manifest as physical goods. Inventory helps me catalogue my dearest possessions and allows the world to access them and my insights in a Mac OS finder inspired browser window. This is the ultimate vanity project.`
	},
	lists: {
		name: 'Lists',
		href: 'http://jamesgoatcher.com/lists',
		sort: 5,
		content: `<div class='block mb-xs'>ECMA6, Local Storage, UI/UX design</div>A stylish list making web app with customized criteria, percentage weighting, and auto-averaging overall values. You can also save your list and upload to different browsers.`
	},
	snippets: {
		name: 'Snippets',
		href: 'http://jamesgoatcher.com/snippets',
		sort: 6,
		content: `<div class='block mb-xs'>ECMA6, UI/UX Design</div>View and copy to clipboard 8 common reusable snippets of code. You can demo the functions utility client side too. Also, merge and download the entire suite as lightweight JS library.`
	},
	state: {
		name: 'Xaxis - State',
		href: 'http://jamesgoatcher.com/pages/xal_state/state-demo.mp4',
		sort: 7,
		content: `<div class='block mb-xs'>ECMA6, PHP, SQL, Collaboration</div>A project management and asset storage solution written as a collaborative effort between 3 AdLabs developers. Note: Due to legal reasons a functionality demo video is provided in lieu of live content.`
	},
	create: {
		name: 'Xaxis - Create',
		href: 'http://jamesgoatcher.com/pages/xal_create',
		sort: 8,
		content: `<div class='block mb-xs'>ECMA6, Collaboration</div>Xaxis AdLabs industry newsletter with a focus on modern, experimental web technology. Password protected.`
	},
	heavensonfirebloggen: {
		name: 'Heaven‘s On Fire - Blog Generator',
		href: 'http://jamesgoatcher.com/pages/heavensonfire_blog_generator',
		sort: 9,
		content: `<div class='block mb-xs'>ECMA6, Brutalist Design</div>Backend companion piece to my travel blog. An after thought a week into the trip, this tool helped me generate templated blog posts.`
	},
	sans35: {
		name: 'Sans 35 Weddings',
		href: 'http://jamesgoatcher.com/pages/sans35',
		sort: 10,
		content: `<div class='block mb-xs'>ECMA6, PHP, SPA</div>My wedding photography company&lsquo;s portfolio page. Has not been well maintained.`
	},
	sciron: {
		name: 'Sciron: A Retrospective',
		href: 'http://jamesgoatcher.com/pages/sciron',
		sort: 11,
		content: `<div class='block mb-xs'>ECMA6, UI/UX Design</div>One of my earliest works in web development was back in 2001 when I built my band at the times website in HTML4.  This is a personal project developed out of a love for nostalgia and providing proper closure.`
	},
	koreangrammar: {
		name: 'Korean Grammar Study Guide',
		href: 'http://jamesgoatcher.com/pages/korean_grammar',
		sort: 12,
		content: `<div class='block mb-xs'>ECMA6, Brutalist Design</div>Not very much of a development project but rather a tool that assisted me in learning the basics of Korean.`
	}
}

function portfolioInit () {
	for (let portName in portfolio)
		writePortfolioTiles(portName);
	loadPortfolioImages();
};

function writePortfolioTiles (portName) {
	const tile = document.createElement('div');
	const img = document.createElement('img');
	const id = document.createElement('div');
	const details = document.createElement('div');
	const name = document.createElement('span');
	const nameAnchor = document.createElement('a');
	const link = document.createElement('span');
	const linkAnchor = document.createElement('a');
	tile.id = portName;
	tile.classList.add('overflow','black','pointer','portfolio','relative');
	if (portName === 'heavensonfire')
		tile.classList.add('margin-top');
	tile.addEventListener('mouseenter',showDetails,false);
	tile.addEventListener('mouseleave',removeDetails,false);
	img.id = `port--${portName}`;
	img.classList.add('pointer');
	id.id = `portDesc--${portName}`;
	details.classList.add('font-size-s');
	name.classList.add('padding-t-b','inline-block','float-left');
	nameAnchor.classList.add('pointer','hue-rotate');
	nameAnchor.href = portfolio[`${portName}`].href;
	nameAnchor.target = '_blank';
	nameAnchor.innerText = portfolio[`${portName}`].name;;
	link.classList.add('padding-t-b','inline-block','float-right');
	linkAnchor.classList.add('pointer','hue-rotate');
	linkAnchor.href = portfolio[`${portName}`].href;
	linkAnchor.target = '_blank';
	linkAnchor.innerText = 'Visit';
	name.appendChild(nameAnchor);
	link.appendChild(linkAnchor);
	tile.appendChild(img);
	tile.appendChild(id);
	details.appendChild(name);
	details.appendChild(link);
	portfolioEl.appendChild(tile);
	portfolioEl.appendChild(details);
};

function loadPortfolioImages () {
	for (let name in portfolio) {
		const el = document.querySelector(`#port--${name}`);
		el.setAttribute('data-src',`./assets/portfolio/port--${name}.png`); // lazy load data-src
		el.setAttribute('class','lazy'); // lazy load class
		el.setAttribute('alt',`${name} image tile`); // alt attribute
	}
};

function showDetails (evt) {
	const portDetails = document.querySelector(`#portDesc--${evt.target.id}`);
	portDetails.classList.add('absolute','abs-ctr','padding-reg','blackRGBA','white','width70','font-size-s');
	portDetails.innerHTML = portfolio[evt.target.id].content;
};

function removeDetails (evt) {
	const portDetails = document.querySelector(`#portDesc--${evt.target.id}`);
	portDetails.classList = '';
	portDetails.innerHTML = '';
};

export { portfolio, portfolioInit };