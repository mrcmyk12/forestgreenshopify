import React from "react";
import { Col, Row, Container } from "reactstrap";
import { blogposts } from "../assets/blogposts";
import { Link } from "react-router-dom";

const Blog = () => {


	return (
		<div style={{marginTop:"90px"}}>
			<img
				alt="Blog"
				style={{ height: "75vh", width: "100%" }}
				src="https://images.pexels.com/photos/131723/pexels-photo-131723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
			/>
			{/* <div
				style={{
					position: "absolute",
					bottom: "0",
					width: "100%",
					opacity: "1",
					color: "white",
					fontSize: "4rem",
					fontWeight: "900",
					fontFamily: "Poppins",
					textAlign: "center",
					height: "50vh",
					justifyContent: "center"
				}}>
				Blog
			</div> */}
			<Container>
				{blogposts.map((post) => {
					return (
						<Link to={`/blog/${post.id}`}>
							<Row
								style={{
									height: "25vh",
									width: "100%",
									marginTop: "25px",
									marginBottom: "25px"
								}}>
								<Col md="3">
									<img
										style={{ height: "25vh", borderRadius: "8px" }}
										src={post.teaserImage}
									/>
								</Col>
								<Col>
									<Row style={{marginTop:"5%"}}>
										<p className="h2" style={{ color: "black" }}>
											{post.title}
										</p>
									</Row>
									<Row>
										<p className="body">{post.subheadline}</p>
									</Row>
								</Col>
							</Row>
							<br style={{color:"black"}} />
						</Link>
					);
				})}
			</Container>
		</div>
	);
};

export default Blog;
