let burger = document.querySelector('.burger');
let header = document.querySelector('.header');
let nav = document.querySelector('.nav');
let navs = document.querySelectorAll('.nav__link');


let burgerOn = false;

burger.addEventListener('click', function () {
	if (burgerOn) {
		[].forEach.call(navs, function (nav) {
			nav.style.display = 'none';
		});

		header.style.flexDirection = 'row';
		nav.style.flexDirection = 'row';
		burgerOn = false;
	} else {
		[].forEach.call(navs, function (nav) {
			nav.style.display = 'inline';
		});

		header.style.flexDirection = 'column';
		nav.style.flexDirection = 'column';
		burgerOn = true;
	}
});