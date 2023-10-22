import Alchemical from "./Alchemical";

export default [
	{ num: new Alchemical([1, -1], [1, 1], [2, 1]), name: "bc" },
	{ num: new Alchemical([1, 1], [1, -1], [2, 1]), name: "fn" },
	{ num: new Alchemical([1, 1], [2, -1], [1, -1]), name: "t" },
	{ num: new Alchemical([1, -1], [2, 1], [1, 1]), name: "tn" },
	{ num: new Alchemical([2, -1], [1, -1], [1, 1]), name: "f" },
	{ num: new Alchemical([2, -1], [1, -1], [1, -1]), name: "r" },
	{ num: new Alchemical([2, -1], [2, -1], [2, -1]), name: "s" },
	{ num: new Alchemical([2, 1], [2, 1], [2, 1]), name: "ft" },
];
