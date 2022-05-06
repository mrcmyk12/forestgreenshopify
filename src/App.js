import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Router>
        <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products/:handle" element={<ProductPage />} />
        </Routes>
			</Router>
		</div>
	);
}

export default App;
