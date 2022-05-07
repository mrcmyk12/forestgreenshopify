import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import Bamboo from "./pages/Bamboo";
import ProductPage from "./pages/ProductPage";

function App() {
	return (
		<div style={{textAlign:"center"}} className="App">
			<Router>
				<NavBar />
				<Cart />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products/:handle" element={<ProductPage />} />
					<Route
						path="/collections/bamboo-collection"
						element={<Bamboo />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
