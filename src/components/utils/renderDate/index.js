export default function renderDate(dateString) {
	const date = new Date(dateString);
	const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
	const formattedDate = `${day}.${month}.${year}`;
	return formattedDate;
}
