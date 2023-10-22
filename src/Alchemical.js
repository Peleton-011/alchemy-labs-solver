export default class Alchemical {
	constructor(r, g, b) {
		this.red = new Node(r[0], r[1]);
		this.green = new Node(g[0], g[1]);
		this.blue = new Node(b[0], b[1]);
	}

	static findPotion(a, b) {
		return [
			(a.red.size + b.red.size) * (a.red.sign * b.red.sign),
			(a.green.size + b.green.size) * (a.green.sign * b.green.sign),
			(a.blue.size + b.blue.size) * (a.blue.sign * b.blue.sign),
		];
	}

	static checkPotion(a, b, res) {
		return this.findPotion(a, b).every((val, i) => val === res[i]);
	}

	static checkNullPotion(a, b) {}

	static add(a, b) {
		return [
			a.red.size * a.red.sign + b.red.size * b.red.sign,
			a.green.size * a.green.sign + b.green.size * b.green.sign,
			a.red.size * a.red.sign + b.red.size * b.red.sign,
		];
	}
}

class Node {
	constructor(size, sign) {
		this.size = size;
		this.sign = sign;
	}
}
