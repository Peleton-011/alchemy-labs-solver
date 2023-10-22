import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
