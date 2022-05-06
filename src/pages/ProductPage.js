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

	const { fetchProductWithHandle, addItemCheckout, product } =
		useContext(ShopContext);

	useEffect(() => {
		fetchProductWithHandle(handle);
	}, [fetchProductWithHandle, handle]);

	// const starterImage = product.variants[0].image.src
	// const starterTitle = product.variants[0].title

	let [image, setImage] = useState();
	let [title, setTitle] = useState();
	let [quantity, setQuantity] = useState(1);

	if (!product.title) return <div>Loading...</div>;

	console.log(product.variants);

	return (
		<div style={{ background: "#050d01" }}>
			<Row
				style={{
					width: "100%",
					padding: "0",
					background: "black"
				}}>
				<Col style={{ padding: "0" }}>
					<Image
						src={image}
						boxSize="85vh"
						width="100%"
						objectFit="fill"
					/>
					<div>
						<p className="h3" style={{ color: "white"}}>{title}</p>
					</div>
				</Col>
				<Col
					style={{
						background: "#050d01",
						paddingLeft: "5%",
						paddingRight: "5%",
						paddingBottom: "40px",
						width: "100%",
						margin: "0"
					}}>
					<p
						style={{
							marginTop: "15%",
							color: "white",
							textAlign: "start"
						}}
						className="h2">
						{product.title}
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
								<Col style={{ marginTop: "15px" }} xs="6" sm="2">
									<div
										key={variant.id}
										className="container-box"
										onClick={() => {
											setImage(variant.image.src);
											setTitle(variant.title);
										}}>
										<img
											className="thumbnail-image"
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
								style={{ width: "100%" }}>
								-
							</Button>
						</Col>
						<Col>
							<p style={{ color: "white" }} className="h3">
								{quantity}
							</p>
						</Col>
						<Col>
							<Button
								onClick={() => setQuantity(quantity + 1)}
								className="brand-button-secondary"
								style={{ width: "100%" }}>
								+
							</Button>
						</Col>
						<Col sm="6">
							<Button style={{}} className="brand-button-secondary">
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
