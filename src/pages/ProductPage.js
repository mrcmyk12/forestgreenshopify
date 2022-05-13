import React, {
	useContext,
	useEffect,
	Component,
	useState,
	setState
} from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";
import { ShopContext } from "../context/shopContext";
import { Image } from "@chakra-ui/react";

const ProductPage = () => {
	const { handle } = useParams();

	const { fetchProductWithHandle, addItemtoCheckout, product } =
		useContext(ShopContext);

	useEffect(() => {
		fetchProductWithHandle(handle);
	}, [fetchProductWithHandle, handle]);


	
	let [image, setImage] = useState();
	let [price, setPrice] = useState();
	let [title, setTitle] = useState();
	let [quantity, setQuantity] = useState(1);
    let [cartProduct, setCartProduct] = useState();

	if (!product.title) return <div>Loading...</div>;

	

	return (
		<div style={{ background: "#050d01" }}>
			<Row
				style={{
					width: "100%",
					padding: "0",
					paddingTop:"60px",
					background: "black"
				}}>
				<Col sm="6" style={{ padding: "0" }}>
					<Image
						src={image}
						
						width="100%"
						objectFit="fill"
					/>
					{/* <div>
						<p className="h3" style={{ color: "white"}}>{title}</p>
					</div> */}
				</Col>
				<Col
					sm="6"
					style={{
						background: "#050d01",
						paddingLeft: "5%",
						paddingRight: "5%",
						paddingBottom: "40px",
						
						margin: "0"
					}}>
					<p
						style={{
							marginTop: "15%",
							color: "white",
							textAlign: "start"
						}}
						className="h1">
						{product.title}
					</p>
					<p
						style={{
							marginTop: "10%",
							color: "white",
							textAlign: "start"
						}}
						className="h3">
						{title}
					</p>
					<p
						style={{
							marginBottom:"10%",
							color: "white",
							textAlign: "start"
						}}
						className="h3">
						{price}
					</p>
					<p
						className="small-text"
						style={{
							color: "white",
							marginTop: ".5rem",
							textAlign: "start"
						}}>
						{product.description}
					</p>
					<Row style={{ marginTop: "15px" }}>
						{product.variants.map((variant) => {
							return (
								<Col style={{ paddingTop: "25px" }} xs="4" sm="2">
									<div
										key={variant.id}
										className="container-box"
										onClick={() => {
											setImage(variant.image.src);
											setTitle(variant.title);
                                            setCartProduct(variant.id);
											setPrice(variant.price)
										}}>
										<img
											className="thumbnail-image"
											style={{paddingTop:"25px"}}
											src={variant.image.src}
										/>
										<div className="variant-overlay"></div>
									</div>
								</Col>
							);
						})}
					</Row>
					<Row style={{ marginTop: "40px" }}>
						<Col>
							<p style={{ color: "white" }} className="body-bold">
								Quantity
							</p>
						</Col>
						<Col>
							<Button
								onClick={() => setQuantity(quantity - 1)}
								className="brand-button-secondary"
								style={{ width: "100%",height:"40px" }}>
								-
							</Button>
						</Col>
						<Col>
							<p style={{ color: "white", justifyContent:"center", lineHeight:"40px"}} className="h3">
								{quantity}
							</p>
						</Col>
						<Col>
							<Button
								onClick={() => setQuantity(quantity + 1)}
								className="brand-button-secondary"
								style={{ width: "100%", height:"40px" }}>
								+
							</Button>
						</Col>
						<Col sm="6">
							<Button onClick={() => { addItemtoCheckout(cartProduct, quantity); console.log(cartProduct, quantity)}} style={{ height:"40px"}} className="brand-button-secondary">
								Add To Cart
							</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default ProductPage;
