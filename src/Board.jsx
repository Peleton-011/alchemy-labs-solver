import React from "react";
import Column from "./Column";

const Board = ({ alchemicals }) => {
	console.log(alchemicals);
	const len = alchemicals.names.length;
	const names = alchemicals.names;
	const numAlchemicals = alchemicals.nums;
	return (
		<div>
			{(() => {
				const cols = [];
				for (let i = 0; i < len + 2; i++) {
					cols.push(
						<Column
							key={i}
							len={len}
							names={names}
							numAlchemicals={numAlchemicals}
						/>
					);
				}
                return cols
			})()}
		</div>
	);
};

export default Board;
