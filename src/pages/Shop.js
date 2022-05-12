import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";
import { Col, Row, Card, CardBody, CardImg, Container } from "reactstrap";

const Shop = () => {
	const { fetchAllProducts, products } = useContext(ShopContext);

	useEffect(() => {
		fetchAllProducts();
	}, [fetchAllProducts]);
	return (
		<div style={{ marginTop: "25vh" }}>
			<Row style={{ width: "100%", margin: "0", padding: "0" }}>
				<Row>
					<h1 className="h1" style={{ color: "black" }}>
						Our Products
					</h1>
				</Row>
				<Row style={{ marginBottom: "2.5%" }}>
					<h1
						className="subtitle"
						style={{ color: "black", fontSize: "1.5rem" }}>
						Free Shipping On Orders Over $50
					</h1>
				</Row>
				<Row style={{marginTop:"3%"}}>
					<p style={{textAlign:"left"}} className="h2">Grocery</p>
				</Row>
				<Row>
					{products.map((product) => {
						if (product.productType == "Grocery") {
							return (
								<Col md="2" style={{ margin: "25px 10px" }}>
									<Link
										className="link"
										to={`/products/${product.handle}`}
										key={product.id}>
										<Card>
											<CardImg
												alt={product.title}
												src={product.images[0].src}
											/>
											<CardBody>
												<p className="body">{product.title}</p>
												<p className="body-bold">
													{product.variants[0].price}
												</p>
											</CardBody>
										</Card>
									</Link>
								</Col>
							);
						}
					})}
				</Row>
				<Row style={{marginTop:"3%"}}>
					<p style={{textAlign:"left"}} className="h2">Health + Beauty</p>
				</Row>
				<Row>
					{products.map((product) => {
						if (product.productType == "Health & Beauty") {
							return (
								<Col md="2" style={{ margin: "25px 10px" }}>
									<Link
										className="link"
										to={`/products/${product.handle}`}
										key={product.id}>
										<Card>
											<CardImg
												alt={product.title}
												src={product.images[0].src}
											/>
											<CardBody>
												<p className="body">{product.title}</p>
												<p className="body-bold">
													{product.variants[0].price}
												</p>
											</CardBody>
										</Card>
									</Link>
								</Col>
							);
						}
					})}
				</Row>
				<Row style={{marginTop:"3%"}}>
					<p style={{textAlign:"left"}} className="h2">Kitchen</p>
				</Row>
				<Row>
					{products.map((product) => {
						if (product.productType == "Kitchen") {
							return (
								<Col md="2" style={{ margin: "25px 10px" }}>
									<Link
										className="link"
										to={`/products/${product.handle}`}
										key={product.id}>
										<Card>
											<CardImg
												alt={product.title}
												src={product.images[0].src}
											/>
											<CardBody>
												<p className="body">{product.title}</p>
												<p className="body-bold">
													{product.variants[0].price}
												</p>
											</CardBody>
										</Card>
									</Link>
								</Col>
							);
						}
					})}
				</Row>				
				<Row style={{marginTop:"3%"}}>
					<p style={{textAlign:"left"}} className="h2">Home</p>
				</Row>
				<Row>
					{products.map((product) => {
						if (product.productType == "Home & Garden") {
							return (
								<Col md="2" style={{ margin: "25px 10px" }}>
									<Link
										className="link"
										to={`/products/${product.handle}`}
										key={product.id}>
										<Card>
											<CardImg
												alt={product.title}
												src={product.images[0].src}
											/>
											<CardBody>
												<p className="body">{product.title}</p>
												<p className="body-bold">
													{product.variants[0].price}
												</p>
											</CardBody>
										</Card>
									</Link>
								</Col>
							);
						}
					})}
				</Row>				
			</Row>
		</div>
	);
};

export default Shop;
