import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";
import logo from "../icons/Forest_Green_Logo.svg";

const BlogEntry = (props) => {
	const { id } = useParams();

	return (
		<div style={{ marginTop: "90px", width: "100%" }}>
			<img
				style={{ height: "60vh", width: "100%", objectFit: "cover" }}
				src={props.post[id].titleImage}
			/>
			<Container>
				<Row style={{ width: "100%" }}>
					<Col style={{ width: "100%", margin: "0" }}>
						<p
							className="h1"
							style={{
								color: "black",
								marginTop: "25px",
								marginBottom: "50px",
							}}>
							{props.post[id].title}
						</p>
					</Col>
				</Row>
				{props.post[id].part1.map((text) => {
					return (
						<Row style={{ marginBottom: "15px", width: "100%" }}>
							<Col style={{ margin: "0" }}>
								<p
									className="body"
									style={{ fontWeight: "300", textAlign: "start", lineHeight:"160%" }}>
									{text}
								</p>
							</Col>
						</Row>
					);
				})}
				<Row
					style={{
						height: "50vh",
						width: "75%",
						marginLeft: "12.5%",
						marginBottom: "25px"
					}}>
					<img
						style={{
							width: "100%",
							height: "50vh",
							objectFit: "cover",
							borderRadius: "36px"
						}}
						src={props.post[id].image1}
					/>
				</Row>
				{props.post[id].part2.map((text) => {
					return (
						<Row style={{ marginBottom: "15px" }}>
							<p
								className="body"
								style={{ textAlign: "start", fontWeight: "300", lineHeight:"160%" }}>
								{text}
							</p>
						</Row>
					);
				})}
				<Row
					style={{
						height: "50vh",
						width: "75%",
						marginLeft: "12.5%",
						marginBottom: "25px"
					}}>
					<img
						style={{
							width: "100%",
							height: "50vh",
							objectFit: "cover",
							borderRadius: "36px"
						}}
						src={props.post[id].image2}
					/>
				</Row>
				{props.post[id].part3.map((text) => {
					return (
						<Row style={{ marginBottom: "15px" }}>
							<p
								className="body"
								style={{ textAlign: "start", fontWeight: "300", lineHeight:"160%" }}>
								{text}
							</p>
						</Row>
					);
				})}
				<Row
					style={{
						height: "50vh",
						width: "75%",
						marginLeft: "12.5%",
						marginBottom: "25px"
					}}>
					<img
						style={{
							width: "100%",
							height: "50vh",
							objectFit: "cover",
							borderRadius: "36px"
						}}
						src={props.post[id].image3}
					/>
				</Row>
				{props.post[id].part4.map((text) => {
					return (
						<Row style={{ marginBottom: "15px" }}>
							<p
								className="body"
								style={{ textAlign: "start", fontWeight: "300", lineHeight:"160%" }}>
								{text}
							</p>
						</Row>
					);
				})}
				<Row>
					<Col>
						<p className="body-bold">
							Remember...Love the Earth, Love Each Other, And Love
							Yourself
						</p>
					</Col>
				</Row>
				<Row>
					<img style={{ height: "350px", margin: "0" }} src={logo} />
				</Row>
			</Container>
		</div>
	);
};

export default BlogEntry;
