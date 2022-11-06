import { aboutInit } from './about.js';
import { portfolio, portfolioInit } from './portfolio.js';
import { photographyList, photographyInit } from './photography.js';
import { languagesInit } from './languages.js';

function initFns () {
	aboutInit();
	portfolioInit();
	photographyInit();
	languagesInit();
	lazyLoadInit();
};

function lazyLoadInit () {
	const lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
	if ('IntersectionObserver' in window) {
  	const lazyImageObserver = new IntersectionObserver(function (entries, observer) {
	    entries.forEach(function(entry) {
	    	if (entry.isIntersecting) {
	       	const lazyImage = entry.target;
	        lazyImage.src = lazyImage.dataset.src;
	        lazyImage.classList.remove('lazy');
	        lazyImageObserver.unobserve(lazyImage);
	      }
	    });
    });
    lazyImages.forEach(function(lazyImage) {
    	lazyImageObserver.observe(lazyImage);
    });
	} 
	else {
		for (let name in portfolio)
			document.querySelector(`#port--${name}`).setAttribute('src',`./assets/portfolio/port--${name}.png`);
		for (let photo of photographyList)
			document.querySelector(`#main_photography_image-${photo}`).setAttribute('src',`./assets/photography/${photo}`);
	}
};

document.onreadystatechange = function () {
	if (document.readyState === 'complete')
		initFns();
};