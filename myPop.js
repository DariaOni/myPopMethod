Array.prototype.myPopMethod = function () {
	if (this.length === 0) return undefined;

	let lastEl = this[this.length - 1];
	this.length = this.length - 1;
	return lastEl;
};

let arr = [1, 3, 5, 7];
let popped = arr.myPopMethod();
console.log(arr, popped);
