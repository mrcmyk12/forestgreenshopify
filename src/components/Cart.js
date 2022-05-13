import React, { useContext } from "react";
import {
	Button,
	Offcanvas,
	OffcanvasHeader,
	OffcanvasBody,
	Row,
	Col
} from "reactstrap";
import { ShopContext } from "../context/shopContext";
import { AiFillCloseCircle } from "react-icons/ai";
import logo from "../icons/Forest_Green_Logo.svg";
import { Link } from "react-router-dom";

const Cart = () => {
	const { isCartOpen, closeCart, checkout, removeLineItem } =
		useContext(ShopContext);

	return (
		<div>
			<Offcanvas
				scrollable="true"
				direction="end"
				isOpen={isCartOpen}
				onClosed={closeCart}>
				<OffcanvasHeader
					style={{ marginBottom: "0", height: "110px" }}
					toggle={() => closeCart()}>
					<img
						style={{ height: "100px" }}
						src={logo}
						alt="Forest Green Logo"
					/>
				</OffcanvasHeader>
				<OffcanvasBody style={{ marginTop: "0" }}>
					<p style={{ marginTop: "0" }} className="subtitle">
						Your Cart
					</p>
					{checkout.lineItems?.length ? (
						checkout.lineItems.map((item) => (
							<div>
								<Row>
									<Col>
										<p
											style={{ fontSize: "1.25rem", marginBottom:"15px" }}
											className="body-bold">
											{item.title}
										</p>
									</Col>
								</Row>
								<Row style={{ marginBottom:"25px"}}>
									<Col style={{ height: "100px" }} sm="2"></Col>
									<Col>
										<img src={item.variant.image.src} />
									</Col>
									<Col>
										<Row style={{ marginBottom: "10px" }}>
											<p className="body-bold">
												Quantity: {item.quantity}
											</p>
										</Row>
										<Row>
											<p className="body-bold">
												${item.variant.price}
											</p>
										</Row>
										<Row style={{ justifyContent: "start" }}>
											<AiFillCloseCircle
												onClick={() => removeLineItem(item.id)}
												style={{
													cursor: "pointer",
													height: "50px"
												}}
											/>
										</Row>
									</Col>
								</Row>
								<hr />
							</div>
						))
					) : (
						<div>
							<h3>Your Cart Is Empty</h3>
						</div>
					)}
					<Row style={{ marginTop: "25px" }}>
						<a href={checkout.webUrl}>
							<Button className="brand-button-primary">
								Proceed To Checkout
							</Button>
						</a>
					</Row>
				</OffcanvasBody>
			</Offcanvas>
		</div>
	);
};

export default Cart;
