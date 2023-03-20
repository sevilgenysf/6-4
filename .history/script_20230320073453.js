const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');

container.addEventListener('click', function (event) {
	if (
		event.target.classList.contains('seat') &&
		!event.target.classList.contains('reserved')
	) {
		event.target.classList.toggle('selected');

		let selectedSeatCount = container.querySelectorAll('.seat.selected').length;
		count.innerText = selectedSeatCount;
	}
});
