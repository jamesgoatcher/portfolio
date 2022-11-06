const aboutEl = document.querySelector('#about_ul-ul');
const languages = [...document.querySelectorAll('.select-language')];
const about = {
	english: [
		'* Visual web engineer with a fondness for ECMA6 and CSS',
		'* Co-founder of Sans35 Wedding Photography',
		`* Strings, keys, sticks, and voices @ <a class='pointer dynamic-hue-rotate' href='https://soundcloud.com/jamesgoatcher' target='_blank' rel='noopener'>&laquo;Mouse Deer&raquo;</a>`,
		'* ELO 1600 chess enthusiast',
		'* Japanese and Korean language competency',
		'* World traveler',
		'* Champion of free speech'
	],
	japanese: [
		'* フラントエンッドエンジニア',
		'* 旅行写真家 &amp; ウェディングフォトグラファー',
		`* ミュージシャン <a class='pointer dynamic-hue-rotate' href='https://soundcloud.com/jamesgoatcher' target='_blank' rel='noopener'>&laquo;MOUSE DEER&raquo;</a>`,
		'* ELO　１６００　チェスプレーヤー',
		'* 日本語 中級、韓国語初級の語学力を有する',
		'* 世界中を旅する人',
		'* 言論自由の擁護者'
	],
	korean: [
		'* 웹 엔지니어',
		'* 여행가 결혼 사진작가',
		`* 음악 @ <a class='pointer dynamic-hue-rotate' href='https://soundcloud.com/jamesgoatcher' target='_blank' rel='noopener'>&laquo;Mouse Deer&raquo;</a>`,
		'* ELO 1600 체스',
		'* 일본어 전문가, 초보 한국어',
		'* 세계 여행 자',
		'* 언론 자유의 수호자'
	]
};

function aboutInit () {
	languages.forEach(l => l.addEventListener('click',selectLanguage,false));
	aboutInitEnglish();
};

function aboutInitEnglish () {
	about.english.forEach(line => {
		const li = document.createElement('li');
		li.innerHTML = line;
		aboutEl.appendChild(li);
	});
	toggleLanguageHue('english');
};

function toggleLanguageHue (language) {
	for (let lang of languages)
		document.querySelector(`#${lang.id}`).classList.remove('dynamic-hue-rotate');
	document.querySelector(`#${language}`).classList.add('dynamic-hue-rotate');
};

function selectLanguage (evt) {
	const language = evt.target.id;
	const els = [...document.querySelectorAll('#about_ul-ul > li')];
	toggleLanguageHue(language);
	for (let i = 0; i < els.length; i++)
		els[i].innerHTML = about[language][i];
	if (language !== 'japanese')
		aboutEl.classList.remove('smaller-font');
	else
		aboutEl.classList.add('smaller-font');
};

export { aboutInit };