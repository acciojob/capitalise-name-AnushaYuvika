//your JS code here. If required.
function upperCase(str) {
  let s = "";
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch >= 'a' && ch <= 'z') {
      s += String.fromCharCode(ch.charCodeAt(0) - 32);
    } else {
      s += ch;
    }
  }
  return s;
}
  
const s = prompt("Enter your name:");
alert(upperCase(s));
