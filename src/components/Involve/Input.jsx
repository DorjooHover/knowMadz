import React from 'react';

// const scriptURL =
// 	'https://script.google.com/macros/s/AKfycbxkgWotCMyvIKoT9aGtPCndZdHtHrq8i972t9CKAVjO6xC7T0I/exec';
// const form = document.forms['google-sheet'];

// form.addEventListener('submit', e => {
// 	e.preventDefault();
// 	fetch(scriptURL, { method: 'POST', body: new FormData(form) })
// 		.then(response => alert('Амжилттай бүртгэгдлээ..'))
// 		.catch(error => console.error('Error!', error.message));
// });

const Input = () => {
	return (
		<form method="post" autocomplete="off" name="google-sheet">
			<div class="form-group">
				<input
					type="submit"
					name="submit"
					className="btn"
					value="БҮРТГҮҮЛЭХ"
				/>
			</div>
			<div class="form-group">
				<input
					type="text"
					name="Email"
					className="input__field"
					placeholder="Имэйл хаяг...."
					value=""
					required=""
				/>
			</div>
		</form>
	);
};

export default Input;
