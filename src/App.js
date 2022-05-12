import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Shop from "./pages/Shop";
import AboutUs from "./pages/AboutUs";
import ProductPage from "./pages/ProductPage";
import ContactUs from "./pages/ContactUs";


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
						path="/shop"
						element={<Shop />}
					/>
					<Route path="/about_us" element={<AboutUs />} />
					<Route path="/faq" element={ <FAQ /> } />
					<Route path="/contact_us" element={ <ContactUs />}/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
