import React from "react";

const PotionCell = ({ row, col }) => {
	const parents = [col + 1, col + row + 2];
	return (
		<div className="potion-cell">
			{parents.join(", ")}
		</div>
	);
};

export default PotionCell;
