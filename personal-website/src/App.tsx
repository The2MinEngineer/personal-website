import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";

function App() {
	return (
		<div className="bg-[#14181B] min-h-screen">
			<div>
				<Navbar />
			</div>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="blog"
					element={<Blog />}
				/>
			</Routes>
		</div>
	);
}

export default App;
