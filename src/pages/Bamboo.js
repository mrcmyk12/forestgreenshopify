import React, { useContext, useEffect, useState, Component } from "react";
import { ShopContext } from "../context/shopContext";
import { Row, Col } from "reactstrap";
import Client from "shopify-buy";
import { Box, Image, Text, Center } from "@chakra-ui/react";
import BambooCards from "../components/BambooCards";

const Bamboo = () => {
	const { fetchBambooCollection, bambooCollection } = useContext(ShopContext);

	useEffect(() => {
		fetchBambooCollection();
	}, [fetchBambooCollection]);

	useEffect(() => {
		const client = Client.buildClient({
			domain: "forest-green-project.myshopify.com",
			storefrontAccessToken: "760d906d07c30f524b1fd94bb7b91b0a"
		});

		const collectionId = "gid://shopify/Collection/388931682561";

        client.collection.fetchAllWithProducts(collectionId).then((collection) => {
            setCollection(collection);
    
        })
        
	});

    let[ collection, setCollection ] = useState(bambooCollection.variants);
    let[ collectionArry, setCollectionArray] = useState();

    
	return (
       
		<div>
			{/* <div style={{ textAlign: "center" }}>
				<Box
					textAlign="center"
					position="relative"
					className="hero-overlay">
					<div className="hero-overlay">
						<Image
							src={collection.image.src}
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
						{collection.title}
					</Text>
					<Text
						position="absolute"
						top="60%"
						textAlign="center"
						w="100%"
						fontFamily="Poppins"
						fontSize="2rem"
						color="black">
						{collection.description}
					</Text>
				</Box>
			</div>
			<div>
				<Row>
					<p className="h2" style={{ margin: "25px, 0px" }}>
						Shop Our Bamboo Collection
					</p>
				</Row>
				<Row>
					<BambooCards />
				</Row>
			</div> */}
            {/* {
                collection.map((product) => {
                    <h3 style={{fontSize:"90px", color:"black", marginTop:"1000px"}}>{product.title}</h3>
                })
            } */}
            {
                collection.title
            }
		</div>
	);
};

export default Bamboo;
