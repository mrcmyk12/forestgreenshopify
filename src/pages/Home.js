import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import logo from "../icons/Forest_Green_Logo.svg";
import { Row, Col, Button } from "reactstrap";
import Hero from "../components/Hero";
import { FaMoneyBill, FaTree } from "react-icons/fa";
import { blogposts } from "../assets/blogposts";

const Home = () => {
	const {
		fetchAllProducts,
		products,
		fetchCollections,
		collections,
		fetchBambooCollection,
		bambooCollection
	} = useContext(ShopContext);

	useEffect(() => {
		fetchAllProducts();
	}, [fetchAllProducts, fetchCollections]);

	// console.log(products);
	// console.log(bambooCollection);
	if (!products)
		return (
			<div>
				<h3 style={{ color: "black" }}>We Dont Have Anything</h3>
			</div>
		);

	return (
		<div style={{ display: "flex", height: "100vh", width: "95%" }}>
			{/* <img style={{height: "150px", zIndex:"3"}} src={logo} /> */}
			<img
				style={{
					height: "100vh",
					width: "100%",
					padding: "0",
					position: "absolute",
					objectFit: "cover"
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
					fontFamily: "Poppins",
					textAlign: "center",
					height: "100vh",
					paddingTop: "25%",
					justifyContent: "center"
				}}>
				Forest Green
				<div style={{ fontSize: "1.25rem" }} className="subtitle">
					Eco-Friendly Products for Conscious Consumers
				</div>
				{/* <div
					className="subtitle"
					style={{
						fontSize: "1.6rem",
						marginTop: "20px",
						fontWeight: "300"
					}}>
					Free Shipping On Orders Over $50
				</div> */}
				<Link to="/shop">
					<Button className="brand-button-primary">
						Shop Our Collection
					</Button>
				</Link>
			</div>
			<Row>
				<Col>
					<img style={{height:"500px"}} src={blogposts[0].teaserImage} />
				</Col>
				<Col>
				
				</Col>
			</Row>
		</div>
	);
};

export default Home;
