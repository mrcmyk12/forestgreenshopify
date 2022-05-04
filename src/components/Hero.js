import React from "react";
import { Box, Image, Text, Button, VStack, Center } from "@chakra-ui/react";

const Hero = () => {
	return (
		<Box textAlign="center" position="relative" className="hero-overlay">
			<div className="hero-overlay">
				<Image
					src="https://images.pexels.com/photos/338936/pexels-photo-338936.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
				color="white"
				fontWeight="bold"
				fontSize="4rem">
				Forest Green
			</Text>
			<Text
				position="absolute"
				top="60%"
				textAlign="center"
				w="100%"
				fontFamily="Poppins"
				fontSize="2rem"
				color="white">
				Eco-Friendly Products for a Eco-Conscious Lifestyle
			</Text>
			<Center>
				<Button
					top="80%"
					position="absolute"
					background="#1f3d0c"
					color="white"
					className="brand-button-primary">
					Shop Now
				</Button>
			</Center>
		</Box>
	);
};

export default Hero;
