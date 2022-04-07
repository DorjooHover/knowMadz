import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
					alert('Амжилттай бүртгэгдлээ!');
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
