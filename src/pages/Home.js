import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import Hero from "../components/Hero";
import { Box, Grid, Center } from "@chakra-ui/react";

const Home = () => {
	const { fetchAllProducts, products } = useContext(ShopContext);

	useEffect(() => {
		fetchAllProducts();
	}, [fetchAllProducts]);

	if (!products) return <div>Loading...</div>;

	console.log(products);

	return (
		<div>
			<Hero />
			<Box h="220px" background="#050d01">
				<Grid gridTemplateColumns="repeat(3, 1fr)" gap={6}>
					<Box>
						<Center h="220px">
							<h2
								style={{
									color: "white",
									fontSize: "2.5rem",
									"font-family": "Poppins",
									"font-weight": "bold"
								}}>
								100% Vegan
							</h2>
						</Center>
					</Box>
					<Box>
						<Center h="220px">
							<h2
								style={{
									color: "white",
									fontSize: "2.5rem",
									"font-family": "Poppins",
									"font-weight": "bold"
								}}>
								All Natural Ingredients
							</h2>
						</Center>
					</Box>
					<Box>
						<Center h="220px">
							<h2
								style={{
									color: "white",
									fontSize: "2.5rem",
									"font-family": "Poppins",
									"font-weight": "bold"
								}}>
								Made With Essential Oils
							</h2>
						</Center>
					</Box>
				</Grid>
			</Box>
			<Box textAlign="center">
				<h1 style={{ marginTop: "25px" }} className="h1">
					Latest Products
				</h1>
			</Box>
			<Grid gridTemplateColumns="repeat(3, 1fr)" gap={6}>
				{products.map((product) => 
					<div className="card">
                        
                    </div>
				)}
			</Grid>
		</div>
	);
};

export default Home;
