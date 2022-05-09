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
		<div style={{marginTop:"25vh"}}>
			<Container>
                <Row>
                    <h1 className="h1" style={{color:"black"}}>Our Products</h1>
                </Row>
				<Row>
					{products.map((product) => (
						<Col md="3" style={{margin:"25px 10px"}}>
							<Link to={`/products/${product.handle}`} key={product.id}>
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
					))}
				</Row>
			</Container>
		</div>
	);
};

export default Shop;
