import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
	Input,
	Button,
	InputGroup,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	Nav,
	NavItem,
	NavLink,
	NavbarText
} from "reactstrap";

const NavBar = () => {
	return (
		<div>
			<Navbar className="custom-navbar" expand="md" fixed="top" dark>
				<NavbarBrand href="/"><h3>Forest Green</h3></NavbarBrand>
				<NavbarToggler onClick={function noRefCheck() {}} />
				<Collapse navbar>
					<Nav style={{ width: "75%" }} className="mr-auto" navbar>
						<NavItem href="">
							<NavLink className="nav-text" style={{"color":"white"}}>Bamboo Collection</NavLink>
						</NavItem>
						<NavItem href="">
							<NavLink className="nav-text" style={{"color":"white"}}>Home Essentials</NavLink>
						</NavItem>
						<NavItem href="">
							<NavLink className="nav-text" style={{"color":"white"}}>Grocery Collection</NavLink>
						</NavItem>
					</Nav>
					<InputGroup style={{ border: "none", width: "35%" }}>
						<Input className="search" />
						<Button className="search-button">Search</Button>
					</InputGroup>
					<AiOutlineShoppingCart style={{"marginLeft":"20px"}} size="40px"/>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default NavBar;
