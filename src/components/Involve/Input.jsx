import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// const Input = () => {
// 	return (
// 		<form method="post" autocomplete="off" name="google-sheet">
// 			<div class="form-group">
// 				<input
// 					type="submit"
// 					name="submit"
// 					className="btn"
// 					value="БҮРТГҮҮЛЭХ"
// 				/>
// 			</div>
// 			<div class="form-group">
// 				<input
// 					type="text"
// 					name="Email"
// 					className="input__field"
// 					placeholder="Имэйл хаяг...."
// 					required=""
// 				/>
// 			</div>
// 		</form>
// 	);
// };
const Input = () => {
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_h48gwis',
				'template_tqw6iir',
				form.current,
				'q5enYcP6M3OFd9ddW'
			)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	return (
		<form ref={form} onSubmit={sendEmail}>
			{/* Button */}
			<input
				type="submit"
				placeholder="БҮРТГҮҮЛЭХ"
				value="БҮРТГҮҮЛЭХ"
				className="btn"
			/>

			{/* Input Email */}
			<input
				type="email"
				name="user_email"
				className="input__field"
				placeholder="Имэйл хаяг..."
				name="email"
			/>
		</form>
	);
};

export default Input;
