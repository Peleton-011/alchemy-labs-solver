import React from "react";

const Column = ({  key: i, len, names, numAlchemicals }) => {
	return (
		<div
			key={i === 0 ? "alchemicals" : i === len + 1 ? "pad" : names[i - 1]}
            className="column"
		>
			{(() => {
				for (let j = 0; j < len; j++) {
					return i === 0
						? (() => {
								return <div key={j}></div>;
						  })()
						: i === len + 1
						? () => {
								return <div key={names[i - 1] + j}></div>;
						  }
						: (() => {
								return <div key={names[i - 1] + j}></div>;
						  })();
				}
			})()}
		</div>
	);
};

export default Column;
