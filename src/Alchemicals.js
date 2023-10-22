import Alchemical from "./Alchemical";

export default {
	names: ["bc", "fn", "t", "tn", "f", "r", "s", "ft"],
	nums: [
		new Alchemical([1, -1], [1, 1], [2, 1]),
		new Alchemical([1, 1], [1, -1], [2, 1]),
		new Alchemical([1, 1], [2, -1], [1, -1]),
		new Alchemical([1, -1], [2, 1], [1, 1]),
		new Alchemical([2, -1], [1, -1], [1, 1]),
		new Alchemical([2, -1], [1, -1], [1, -1]),
		new Alchemical([2, -1], [2, -1], [2, -1]),
		new Alchemical([2, 1], [2, 1], [2, 1]),
	],
};
