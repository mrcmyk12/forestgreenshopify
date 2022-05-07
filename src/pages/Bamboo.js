import React, { useContext, useEffect, useState, Component } from "react";
import { ShopContext } from "../context/shopContext";
import { Row, Col } from "reactstrap";
import { Box, Image, Text, Center } from "@chakra-ui/react";
import BambooCards from "../components/BambooCards";

const Bamboo = () => {
	const { fetchBambooCollection, bambooCollection } = useContext(ShopContext);

	useEffect(() => {
		fetchBambooCollection();
	}, [fetchBambooCollection]);

	console.log(bambooCollection);

	return (
        <div>
		<div style={{ textAlign: "center" }}>
			<Box textAlign="center" position="relative" className="hero-overlay">
				<div className="hero-overlay">
					<Image
						src={bambooCollection.image.src}
						boxSize="100vh"
						width="100%"
						objectFit="fill"
					/>
				</div>
				<Text
					position="absolute"
					top="40%"
					fontFamily="Poppins"
					w="100%"
					textAlign="center"
					color="black"
					fontWeight="500"
					fontSize="3rem">
					{bambooCollection.title}
				</Text>
				<Text
					position="absolute"
					top="60%"
					textAlign="center"
					w="100%"
					fontFamily="Poppins"
					fontSize="2rem"
					color="black">
					{bambooCollection.description}
				</Text>
			</Box>
		</div>
        <div>
            <Row>
                <p className="h2" style={{margin:"25px, 0px"}}>Shop Our Bamboo Collection</p>
            </Row>
            <Row>
                <BambooCards />
            </Row>
        </div>
        </div>
	);
};

export default Bamboo;
