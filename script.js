//your JS code here. If required.
function upperCase (str) {
	let s = " ";
	for (let i=0; i<str.length; i++) {
		s = str.toUpperCase();
	}
	return s;

}
const s = prompt("Enter String: ");
alert(upperCase(s));