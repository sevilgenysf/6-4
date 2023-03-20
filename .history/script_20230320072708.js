const container = document.querySelector('.container');

container.addEventListener('click', function (event) {
	if (
		event.target.classList.contains('seat') &&
		!event.target.classList.contains('reserved')
	) {
		event.target.classList.toggle('selected');
	}
});
