import React from "react";
import { Col, Row, Button } from "reactstrap";
import logo from '../icons/ForestGreenWhite.svg'
import pic from "../assets/profile_pic.jpg"
import { Link } from "react-router-dom";

const AboutUs = () => {
	return (
		<div style={{width:"100%", height:"100vh"}}>
			<Row style={{ width: "100%", margin:"0" }}>
				<Col md="6" style={{ height: "100vh", margin: "0" }}>
					<Row style={{ marginTop: "25%" }}>
						<p className="h1" style={{ color: "#1f3d0c" }}>
							About Us...Me
						</p>
					</Row>
					<Row>
						<p
							style={{ lineHeight: "160%", padding: "15px 30px", color:"#1f3d0c" }}
							className="body">
							Hi, my name is Philip. I started Forest Green because I
							wanted to help solve the World's problem with waste and
							over-consumption. I think a lot of times, people are
							unaware of the harmfulness of the products that they are
							buying. So Forest Green is here to not only provide
							eco-friendly products to you the consumer. But I am also
							here to educate you on how to shop and live a more
							conscious and mindful lifestyle. Thanks for poking around
							the store, and feel free to reach out if you have any
							questions.
						</p>
					</Row>
					<Row style={{ alignContent: "center" }}>
						<Link style={{padding:"0", justifyItems:"center"}} to="/contact_us">
							<Button
								className="brand-button-secondary"
								style={{ width: "35%"}}>
								Contact Us
							</Button>
						</Link>
					</Row>
				</Col>
				<Col
					style={{
						background: "#1f3d0c",
						height: "100vh",
						margin: "0",
						alignContent: "center"
					}}
					md="6">
					<Row>
                       	<img
							style={{
								height: "75vh",
								marginTop: "20%",
								objectFit: "contain"
							}}
							src={pic}
						/>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default AboutUs;
