import React from "react";
import Cell from "./Cell";

const Column = ({ key: i, len, names, numAlchemicals }) => {
	return (
		<div
			key={i === 0 ? "alchemicals" : i === len + 1 ? "pad" : names[i - 1]}
			className="column"
		>
			{(() => {
				const cells = [];
				for (let j = 0; j < len; j++) {
					cells.push(
						<Cell col={i} row={j} content={numAlchemicals[j - 1]} />
					);
				}
                return cells;
			})()}
		</div>
	);
};

export default Column;
