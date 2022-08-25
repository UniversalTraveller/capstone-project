export default function renderDate(dateString) {
	const date = new Date(dateString);
	const formatedDate = date.toLocaleDateString('de-DE');
	return formatedDate;
}
