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
			<Offcanvas direction="end" isOpen={isCartOpen} onClosed={closeCart}>
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
								<Row style={{marginBottom:"15px"}}>
									<Col>
										<p style={{fontSize:"1.25rem"}} className="body-bold">{item.title}</p>
									</Col>
								</Row>
								<Row>
									<Col sm="2">
										<AiFillCloseCircle
											size="30px"
											onClick={() => removeLineItem(item.id)}
											style={{ cursor: "pointer", marginTop: "50%" }}
										/>
									</Col>
									<Col>
										<p
											style={{ marginTop: "25%" }}
											className="body-bold">
											{item.quantity}
										</p>
									</Col>
									<Col>
										<img src={item.variant.image.src} />
									</Col>
									<Col>
										<p className="body-bold">{item.variant.price}</p>
									</Col>
								</Row>
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
