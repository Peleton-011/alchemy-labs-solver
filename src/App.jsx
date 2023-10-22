import { useState } from "react";
import "./App.css";
import Alchemicals from "./Alchemicals";
import Board from "./Board";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="board-wrapper">
				<Board alchemicals={Alchemicals}></Board>
			</div>
		</>
	);
}

export default App;
