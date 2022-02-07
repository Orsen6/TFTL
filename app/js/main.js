
document.addEventListener('DOMContentLoaded', function() {
	document.querySelector(".header_link-logo").classList.add("header_link-logo--loaded");
	setTimeout(function () {
		document.querySelector(".header_link-logo--sec").remove();
	}, 500);
});


document.querySelector(".header_inner-select").addEventListener('mouseover', function (event) {
	event.stopPropagation;
	document.querySelector(".header_inner-list").classList.toggle("header_inner-list--active");
});

const domLanguages = document.querySelectorAll(".header_inner-link");
domLanguages.forEach((i) => {
	i.addEventListener('click', () => {
		document.querySelector(".header_inner-list").classList.toggle("header_inner-list--active");
	})
});

document.addEventListener("mousemove", parallax);

function parallax (e) {
	const parallaxElement = this.querySelector(".main_inner-title");
	const speed = parallaxElement.getAttribute('data-speed');
	const x = (window.innerWidth - e.pageX*speed)/100;
	const y = (window.innerHeight - e.pageY*speed)/100;
	parallaxElement.style.transform = `translateX(${-x}px) translateY(${-y}px)`
}