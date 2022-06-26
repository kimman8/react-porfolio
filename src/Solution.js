import React, { Fragment, useRef, useState, useEffect } from "react";

function Solution() {
	const [timerMinutes, setTimerMinutes] = useState(0);
	const [timerSeconds, setTimerSeconds] = useState(0);
	let countdown;
	let interval = useRef();
	const [values, setValues] = useState({
		ourMinutes: 0,
		ourSeconds: 0,
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(values);
		// onSubmit(values);
		setTimerMinutes(values.ourMinutes);
		setTimerSeconds(values.ourSeconds);
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};
	const reset = () => {
		setTimerMinutes(0);
		setTimerSeconds(0);
	};
	const pause = () => {
		clearInterval(interval.current);
	};

	const startTimer = () => {
		// const then = now + timerSeconds * 1000 + timerMinutes * 60 * 1000;
		// const countdownDate = new Date("June 30, 2022 00:00:00").getTime();
		const now = new Date().getTime();
		// const ourTime =
		// 	values.ourMinutes * 60 * 1000 + values.ourSeconds * 1000 + now;
		const ourTime = timerMinutes * 60 * 1000 + timerSeconds * 1000 + now;
		console.log(timerMinutes);
		interval = setInterval(() => {
			const distance = ourTime - now;
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			// const minutes = Math.floor(distance / 60);
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);
			// const seconds = distance % 60;
			// console.log(distance);
			if (distance < 0) {
				//stop our timer
				clearInterval(interval.current);
			} else {
				//update timer
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		}, 1000);
	};
	useEffect(() => {
		startTimer();
		return () => {
			clearInterval(interval.current);
		};
	});
	return (
		<Fragment>
			<form onSubmit={handleSubmit}>
				<label>
					<input
						type="number"
						value={values.ourMinutes}
						onChange={handleChange}
						name="ourMinutes"
						// value={timerMinutes}
						// onChange={(e) => setTimerMinutes(e.target.value)}
						// name="timerMinutes"
					/>
					Minutes
				</label>
				<label>
					<input
						type="number"
						value={values.ourSeconds}
						onChange={handleChange}
						name="ourSeconds"
						// value={timerSeconds}
						// onChange={(e) => setTimerSeconds(e.target.value)}
						// name="timerSeconds"
					/>
					Seconds
				</label>

				<button type="submit">START</button>
				<button onClick={pause}>PAUSE / RESUME</button>
				<button onClick={reset}>RESET</button>
				<h1 data-testid="running-clock">
					{timerMinutes}:{timerSeconds < 10 ? "0" : ""}
					{timerSeconds}
				</h1>
			</form>
		</Fragment>
	);
}
export default Solution;
