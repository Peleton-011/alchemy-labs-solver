import React from "react";
import Column from "./Column";
import PotionBoard from "./PotionBoard";
import { useState } from "react";

const Board = ({ alchemicals }) => {
	console.log(alchemicals);
	const len = alchemicals.names.length;
	const names = alchemicals.names;
	const numAlchemicals = alchemicals.nums;

	const emptyContent = [];
	for (let i = 0; i < len; i++) {
		const col = [];
		for (let j = 0; j < len; j++) {
			col.push([]);
		}
		emptyContent.push(col);
	}

	const [contents, setContents] = useState(emptyContent);

	const potionOnBlur = (e, x, y) => {
		const content = e.target.textContent;
		const type =
			content === ""
				? null
				: content.includes("r") || content.includes("R")
				? "red"
				: content.includes("g") || content.includes("G")
				? "green"
				: content.includes("n") || content.includes("N")
				? "neutral"
				: "blue";

		const sign = !["red", "green", "blue"].includes(type)
			? null
			: content.includes("-")
			? -1
			: 1;
		console.log(e.target.textContent, " ", x, ", ", y, " ", type, " ", sign);
	};

	return (
		<div className="board-wrapper">
			<div className="board">
				{(() => {
					const cols = [];
					for (let i = 0; i < len + 2; i++) {
						cols.push(
							<Column
								key={i}
								col={i}
								len={len}
								name={names[i - 1]}
								contents={
									i === 0
										? numAlchemicals
										: i === len + 1
										? emptyContent[0]
										: contents[i - 1]
								}
							/>
						);
					}
					return cols;
				})()}
			</div>

			<PotionBoard len={len} onblur={potionOnBlur} />
		</div>
	);
};

export default Board;
