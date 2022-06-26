import React, { useState } from "react";

export default function LoginForm() {
	const [values, setValues] = useState({
		username: "",
		password: "",
	});
	const onSubmit = (e) => {
		e.preventDefault();
		console.log("submitted! :)");
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
		onSubmit(values);
	};
	const isEnabled = values.username.length > 0 && values.password.length > 0;

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						placeholder="Enter your username"
						id="username-input"
						value={values.username}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						placeholder="Enter your password"
						id="password-input"
						value={values.password}
						onChange={handleChange}
					/>
				</div>
				<button type="submit" id="login-button" disabled={!isEnabled}>
					Submit
				</button>
			</form>
		</div>
	);
}
