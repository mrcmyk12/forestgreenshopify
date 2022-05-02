import React from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";

const Hero = () => {
	return (
		<Box display="flex" justifyContent="center">
			<Image
				src="https://images.pexels.com/photos/15286/pexels-photo.jpg"
				boxSize="90vh"
				width="100%"
				objectFit="fill"
			/>
			<Text
				position="absolute"
				bottom="70%"
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
                textAlign="center"
				bottom="65%"
                w="100%"
				fontFamily="Poppins"
				fontSize="2rem"
				color="white">
				Eco-Friendly Products for a Eco-Conscious Lifestyle
			</Text>
			<Button
				position="absolute"
				bottom="58%"
				background="#1f3d0c"
				color="white"
				className="brand-button-primary">
				Shop Now
			</Button>
		</Box>
	);
};

export default Hero;
