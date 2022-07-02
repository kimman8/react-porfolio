import React, { Fragment, useState, useEffect } from "react";
function Timer1() {
	const [timerMinutes, setTimerMinutes] = useState(0);
	const [timerSeconds, setTimerSeconds] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [isActive, setIsActive] = useState(false);
	const [displayClock, setDisplayClock] = useState("");
	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				seconds === 0
					? setIsActive(false)
					: setSeconds((seconds) => seconds - 1);
				setDisplayClock(convertSecToDisplayClock(seconds));
				console.log(displayClock);
			}, 1000);
		} else {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [isActive, seconds]);
	const handleStart = () => {
		setSeconds(convertToSeconds(timerMinutes, timerSeconds));
		console.log(timerMinutes);
		setIsActive(true);
	};

	const handleReset = () => {
		setSeconds(0);
		setTimerMinutes(0);
		setTimerSeconds(0);
		setDisplayClock("0:00");
	};

	const convertToSeconds = (min, sec) => {
		return parseInt(min) * 60 + parseInt(sec);
	};

	const convertSecToDisplayClock = (seconds) => {
		const sec = seconds % 60;
		const strSeconds = sec < 10 ? `0${sec}` : sec;
		return `${Math.round(seconds / 60)}:${strSeconds}`;
	};

	const handlePauseResume = () => {
		setIsActive(!isActive);
	};

	return (
		<Fragment>
			<label>
				<input
					type="number"
					// name="ourMinutes"
					value={timerMinutes}
					onChange={(e) => setTimerMinutes(e.target.value)}
				/>
				Minutes
			</label>
			<label>
				<input
					type="number"
					onChange={(e) => setTimerSeconds(e.target.value)}
					// name="ourSeconds"
					value={timerSeconds}
				/>
				Seconds
			</label>

			{/* <button type="submit">START</button> */}
			<br />
			<button onClick={handleStart}>START</button>
			<br />
			<button onClick={handlePauseResume}>PAUSE / RESUME</button>
			<br />
			<button onClick={handleReset}>RESET</button>
			<h1 data-testid="running-clock">{displayClock}</h1>
		</Fragment>
	);
}
export default Timer1;
