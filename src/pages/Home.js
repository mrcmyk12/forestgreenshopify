import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import{Row,Col,Button} from 'reactstrap'
import Hero from "../components/Hero";
import { FaMoneyBill, FaTree } from "react-icons/fa";
import { MdPerson } from "react-icons/md";


const Home = () => {
	const { fetchAllProducts, products, fetchCollections, collections, fetchBambooCollection, bambooCollection } =
		useContext(ShopContext);

	useEffect(() => {
		fetchAllProducts(); fetchCollections(); fetchBambooCollection();
	},[fetchAllProducts, fetchCollections, fetchBambooCollection]);

	console.log(products)
	console.log(bambooCollection)
	if(!products) return <div><h3 style={{color:"black"}}>We Dont Have Anything</h3></div>

	return (
		<div style={{ display: "flex", height: "100vh", width: "95%" }}>
			<img
				style={{
					height: "100vh",
					width: "100%",
					padding: "0",
					position: "absolute"
				}}
				src="https://images.pexels.com/photos/338936/pexels-photo-338936.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
			/>
			<div
				style={{
					position: "absolute",
					bottom: "0",
					background: "rgb(0,0,0)",
					background: "rgba(0,0,0,0.5)",
					width: "100%",
					opacity: "1",
					color: "white",
					fontSize: "4rem",
					fontWeight: "900",
					textAlign: "center",
					height: "100vh",
					paddingTop: "25%",
					justifyContent: "center"
				}}>
				Forest Green
				<div className="subtitle">Eco-Friendly Products for Conscious Consumers</div>
				<Link to='/shop'>
				<Button className="brand-button-primary">
					Shop Our Collection
				</Button>
				</Link>
			</div>
		</div>
			
		
	);
};

export default Home;
