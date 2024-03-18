import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="bg-[#14181B] min-h-screen">
			<div className="top-0 sticky z-50">
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
			<div>
				<Newsletter />
				<Footer />
			</div>
		</div>
	);
}

export default App;
