import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import logo from "../icons/Forest_Green_Logo.svg";
import { Row, Col, Button, Container } from "reactstrap";
import Hero from "../components/Hero";
import { FaMoneyBill, FaTree } from "react-icons/fa";
import { blogposts } from "../assets/blogposts";
import { Img } from "@chakra-ui/react";

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
					objectFit: "cover",
					
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
					justifyContent: "center",
			
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
			
			<Container style={{marginTop:"50px"}}>
			<Row style={{height:"100vh"}}>
				{}
			</Row>
			<Row >
				<Col sm="6" >
					<Row style={{marginBottom:"50px"}}>
						<img style={{height:"400px"}} src={blogposts[0].titleImage} />
					</Row>
				</Col>
				<Col sm="6">
					<Row>
						<h1 className="h1">{blogposts[0].title}</h1>
					</Row>
					<Row style={{marginTop:"30px"}}>
						<h3 className="body">{blogposts[0].subheadline}</h3>
					</Row>
					<Row style={{marginTop:"45px"}}>
						<Link to={`/blog/${blogposts[0].id}`}>
							<Button className="brand-button-primary">
								View Blog Post
							</Button>
						</Link>
					</Row>
				</Col>
			</Row>
			<Row >
				<Col sm="6" >
					<Row style={{marginBottom:"50px"}}>
						<img style={{height:"400px"}} src={blogposts[1].titleImage} />
					</Row>
				</Col>
				<Col sm="6">
					<Row>
						<h1 className="h1">{blogposts[1].title}</h1>
					</Row>
					<Row style={{marginTop:"30px"}}>
						<h3 className="body">{blogposts[1].subheadline}</h3>
					</Row>
					<Row style={{marginTop:"45px"}}>
						<Link to={`/blog/${blogposts[1].id}`}>
							<Button className="brand-button-primary">
								View Blog Post
							</Button>
						</Link>
					</Row>
				</Col>
			</Row>
			</Container>
		</div>
	
	);
};

export default Home;
