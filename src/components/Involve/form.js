const scriptURL =
	'https://script.google.com/macros/s/AKfycbwHZpC5caHRlklroWwIlnpL6p3YhLc06O7jg9fMQ5HmtZGItYX1WTJazFoA7-QcqQFrGA/exec';
const form = document.forms['google-sheet'];

form.addEventListener('submit', e => {
	e.preventDefault();
	fetch(scriptURL, { method: 'POST', body: new FormData(form) })
		.then(response =>
			alert('Thanks for Contacting us..! We Will Contact You Soon...')
		)
		.catch(error => console.error('Error!', error.message));
});
