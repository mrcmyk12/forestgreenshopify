import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import{Row,Col} from 'reactstrap'
import Hero from "../components/Hero";
import { FaMoneyBill, FaTree } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { Box, Grid, Center, Image, Text, Button } from "@chakra-ui/react";

const Home = () => {
	const { fetchHomeCollection, homeCollection } =
		useContext(ShopContext);

	useEffect(() => {
		fetchHomeCollection()
	},[fetchHomeCollection]);

	console.log(homeCollection.products);

	if(!homeCollection) return <div><h3 style={{color:"black"}}>We Dont Have Anything</h3></div>

	return (
		<div>
			<Hero />
			<Box p="20px" background="#050d01">
				<Grid
					justifyContent="center"
					textAlign="center"
					templateColumns="repeat(3,1fr)">
					<Center>
						<FaMoneyBill color="white" size="2em" />
					</Center>
					<Center>
						<FaTree color="white" size="2em" />
					</Center>
					<Center>
						<MdPerson color="white" size="2em" />
					</Center>
				</Grid>
				<Grid textAlign="center" templateColumns="repeat(3,1fr)">
					<Text
						fontSize="1.5rem"
						color="white"
						fontWeight="800"
						marginTop="20px">
						Hassle Free Returns
					</Text>
					<Text
						fontSize="1.5rem"
						color="white"
						fontWeight="800"
						marginTop="20px">
						All Products Are Eco-Friendly
					</Text>
					<Text
						fontSize="1.5rem"
						color="white"
						fontWeight="800"
						marginTop="20px">
						Great Customer Service
					</Text>
				</Grid>
				<Grid textAlign="center" templateColumns="repeat(3,1fr)">
					<Text
						textTransform="capitalize"
						fontSize=".75rem"
						paddingRight="20px"
						paddingLeft="20px"
						color="white"
						fontWeight="500"
						marginTop="5px">
						if you're not 200% satsified, dont't worry, get your money
						back
					</Text>
					<Text
						textTransform="capitalize"
						fontSize=".75rem"
						paddingRight="20px"
						paddingLeft="20px"
						color="white"
						fontWeight="500"
						marginTop="5px">
						so that you can feel guilt-free doing your part to keep our
						earth clean
					</Text>
					<Text
						textTransform="capitalize"
						fontSize=".75rem"
						paddingRight="20px"
						paddingLeft="20px"
						color="white"
						fontWeight="500"
						marginTop="5px">
						do you have a problem with your order? don't worry, let us
						know
					</Text>
				</Grid>
			</Box>
			<Box textAlign="center">
				<h1 style={{ marginTop: "25px" }} className="h1">
					Latest Products
				</h1>
			</Box>
			<Grid textAlign="center" templateColumns="repeat(3, 1fr)">
				{homeCollection.products.map((product) => (
					<Link to={`/products/${product.handle}`} key={product.id}>
						<Box
							className="container-box"
							maxW="sm"
							height=""
							margin="10px"
							borderWidth="1px"
							borderRadius="lg"
							overflow="hidden"
							textAlign="center"
							position="relative">
							<Image src={product.images[0].src} />
							<div className="overlay">
								<Text
									paddingTop="40%"
									textAlign="center"
									w="100%"
									color="white"
									fontSize="1.5rem"
									fontWeight="bolder">
									{product.title}
								</Text>
								<Text
									textAlign="center"
									w="100%"
									fontWeight="800"
									fontSize="1rem"
									color="white">
									${product.variants[0].price}
								</Text>
							</div>
						</Box>
					</Link>
				))}
			</Grid>
		</div>
		
	);
};

export default Home;
