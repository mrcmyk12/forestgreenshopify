import React, { useContext } from "react";
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
import { ShopContext } from "../context/shopContext";
import {Link} from "react-router-dom"

const NavBar = () => {

	const {openCart, openMenu, checkout} = useContext(ShopContext)

	return (
		<div>
			<Navbar className="custom-navbar" expand="md" fixed="top" dark>
				<NavbarBrand href="/"><h3>Forest Green</h3></NavbarBrand>
				<NavbarToggler onClick={function noRefCheck() {}} />
				<Collapse navbar>
					<Nav style={{ width: "75%" }} className="mr-auto" navbar>
						<NavItem>
							<Link to="/collections/bamboo-collection" className="nav-text" style={{color:"white"}}>Bamboo Collection</Link>
						</NavItem>
						<NavItem>
							<Link to="/collections/home-essentials" className="nav-text" style={{"color":"white"}}>Home Essentials</Link>
						</NavItem>
						<NavItem href="">
							<Link to="/collections/grocery-collection" className="nav-text" style={{"color":"white"}}>Grocery Collection</Link>
						</NavItem>
					</Nav>
					{/* <InputGroup style={{ border: "none", width: "35%" }}>
						<Input className="search" />
						<Button className="search-button">Search</Button>
					</InputGroup> */}
					<div style={{width:"25%"}}></div>
					<div style={{ cursor:"pointer"}}>
					<AiOutlineShoppingCart style={{"marginLeft":"20px", marginRight:"0px"}} size="40px" onClick={() => openCart()}/>
					</div>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default NavBar;
