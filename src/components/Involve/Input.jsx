import React from 'react';

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
