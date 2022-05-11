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
			<Row style={{width:"100%", margin:"0", padding:"0"}}>
                <Row>
                    <h1 className="h1" style={{color:"black"}}>Our Products</h1>
                </Row>
				<Row>
					{products.map((product) => (
						<Col md="3" style={{margin:"25px 10px"}}>
							<Link className="link" to={`/products/${product.handle}`} key={product.id}>
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
			</Row>
		</div>
	);
};

export default Shop;
