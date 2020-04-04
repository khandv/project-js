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

// class Options {
//     constructor(height, width, bg, fontSize, textAlign) {
//         this.height = height;
//         this.width = width;
//         this.bg = bg;
//         this.fontSize = fontSize;
//         this.textAlign = textAlign;
//     }
//     createDiv(text) {
//         let elemDiv = document.createElement('div');
//         document.body.appendChild(elemDiv);
//         elemDiv.textContent = text;
//         elemDiv.textAlign = this.textAlign;
//         elemDiv.style.height = this.height;
//         elemDiv.style.width = this.width;
//         elemDiv.style.background = this.bg;
//         elemDiv.style.fontSize = this.fontSize;
//     }
// }

class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	createDiv(text) {
		let elem = document.createElement('div');
		document.body.appendChild(elem);
		let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        elem.style.cssText = param;
        elem.textContent = text;
	}
}



const item = new Options(50, 500, 'blue', 30, 'center');

item.createDiv('Hey, gays!');
console.log(item);