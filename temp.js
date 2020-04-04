// let x = 5; 
// console.log(++x);

// console.log([ ] + false - null + true);

// // let y = 1; 
// // let x = y = 2; 
// // console.log(x);

// console.log([ ] + 1 + 2);

// console.log("1"[0]);

// console.log(2 && 1 && null && 0 && undefined);

// console.log(!!( a && b ));

// console.log(null || 2 && 3 || 4);

// console.log(+"Infinity");

// console.log("Ёжик" > "яблоко");

// console.log(0 || "" || 2 || undefined || true || falsе);

<input id="age" value="30">
let age = document.getElementById('age');
function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser();