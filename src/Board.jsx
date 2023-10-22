import React from "react";
import Column from "./Column";
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

	return (
		<div className="board">
			{(() => {
				const cols = [];
				for (let i = 0; i < len + 2; i++) {
					cols.push(
						<Column
							key={i}
                            col = {i}
							len={len}
							name={names[i]}
							contents={
								i === 0 ? numAlchemicals : i === len + 1 ? emptyContent[0] :  contents[i - 1]
							}
						/>
					);
				}
				return cols;
			})()}
		</div>
	);
};

export default Board;
