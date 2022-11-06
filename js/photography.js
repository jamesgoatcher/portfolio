const photoListEl = document.querySelector('#main_photography-list');
const photographyCount = 33;
const photographyList = new Array(photographyCount).fill(undefined).map((_,i) => `${i+1}.jpg`);

function photographyInit () {
	photographyList.forEach((photo,i) => {
		const photoEl = document.createElement('img');
		photoEl.setAttribute('data-src',`./assets/photography/${photo}`);
		photoEl.setAttribute('class','lazy');
		photoEl.setAttribute('id',`main_photography_image-${i+1}`);
		photoEl.setAttribute('alt',`Photo named ${photo}`);
		photoListEl.appendChild(photoEl);
	});
};

export { photographyList, photographyInit };