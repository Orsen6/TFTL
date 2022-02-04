
document.addEventListener('DOMContentLoaded', function() {
	document.querySelector(".header_link-logo").classList.add("header_link-logo--loaded");
	setTimeout(function () {
		document.querySelector(".header_link-logo--sec").remove();
	}, 1700);
});

document.querySelector(".header_inner-select").addEventListener('mouseover', function (event) {
	event.stopPropagation;
	document.querySelector(".header_inner-list").classList.toggle("header_inner-list--active");
});