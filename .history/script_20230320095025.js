const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');

container.addEventListener('click', function (event) {
	if (
		event.target.classList.contains('seat') &&
		!event.target.classList.contains('reserved')
	) {
		event.target.classList.toggle('selected');

		calculateTotal();
	}
});

select.addEventListener('change', function (event) {
	calculateTotal();
});

function calculateTotal() {
	const selectedSeats = container.querySelectorAll('.seat.selected');

	const selectedSeatsArr = [];
	const seatsArr = [];

	selectedSeats.forEach(function (seat) {
		selectedSeats.push(seat);
	});

	seats.forEach(function (seat) {
		seatsArr.push(seat);
	});

	let selectedSeatIndex = selectedSeatsArr.map(function (s) {
		return seatsArr.indexOf(s);
	});

	let selectedSeatCount = selectedSeats.length;

	console.log(selectedSeatIndex);

	// secilen koltuk sayisi
	count.innerText = selectedSeatCount;
	// secilen koltuk sayisi ve movienin içindeki valuenun carpimi
	amount.innerText = selectedSeatCount * select.value;
}
