const container = document.querySelector('.container');

container.addEventListener('click', function (event) {
	if (event.target.classList.contains('seat')) {
		console.log(event.target);
	}
});
