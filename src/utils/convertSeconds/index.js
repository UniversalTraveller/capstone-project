export default function convertSeconds(timespan) {
	// check if string contains only digits
	function onlyDigits(str) {
		return /^[0-9]+$/.test(str);
	}

	if (onlyDigits(timespan)) {
		// convert to hh:mm:ss when timespan is only digits
		const result = new Date(timespan * 1000).toISOString().slice(11, 19);
		return result;
	} else {
		// else do nothing
		const result = timespan;
		return result;
	}
}
