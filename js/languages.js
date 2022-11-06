const languagesEl = document.querySelector('#main_languages-list');
const languages = ['JavaScript','HTML','CSS','PHP','Bash','Apex','SQL','Web Components','AngularJS','Salesforce Industries','Photoshop','Figma','XD','Premiere'];

function languagesInit () {
	for (let lang of languages) {
		const p = document.createElement('p');
		p.innerText = lang;
		languagesEl.appendChild(p);
	}
};

export { languagesInit };