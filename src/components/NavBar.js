import React, { useContext, useState } from "react";
import logo from '../icons/Forest_Green_White.svg'
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
import { Link } from "react-router-dom";

const NavBar = () => {
	const { openCart, openMenu, checkout } = useContext(ShopContext);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<Navbar
				style={{ zIndex: "4" }}
				className="custom-navbar"
				expand="md"
				fixed="top"
				dark
				full
				light>
				<NavbarBrand style={{fontFamily:"EB Garamond", fontSize:"1.75rem", fontWeight:"800"}} href="/">
					<img style={{zIndex:"3", width:"150px"}} src={logo} alt="Forest Green Logo" />			
				</NavbarBrand>
				<NavbarToggler onClick={() => setIsOpen(!isOpen)} />
				<Collapse isOpen={isOpen} navbar>
					<Nav style={{ width: "75%" }} className="ml-auto" navbar>
						<NavItem className="nav-prop">
							<Link
								to="/shop"
								className="nav-text"
								style={{ color: "white" }}>
								Shop
							</Link>
						</NavItem>
						<NavItem className="nav-prop">
							<Link
								to="/collections/home-essentials"
								className="nav-text"
								style={{ color: "white" }}>
								Blog
							</Link>
						</NavItem>
						<NavItem className="nav-prop">
							<Link
								to="/about_us"
								className="nav-text"
								style={{ color: "white" }}>
								About Us
							</Link>
						</NavItem>
						<NavItem className="nav-prop">
							<Link
								to="/faq"
								className="nav-text"
								style={{ color: "white" }}>
								FAQ
							</Link>
						</NavItem>
						<NavItem className="nav-prop">
							<Link
								to="/contact_us"
								className="nav-text"
								style={{ color: "white" }}>
								Contact Us
							</Link>
						</NavItem>
					</Nav>
					<div style={{ width: "25%" }}></div>
					<div style={{ cursor: "pointer" }}>
						<AiOutlineShoppingCart
							style={{ marginLeft: "20px", marginRight: "0px" }}
							size="40px"
							onClick={() => openCart()}
						/>
					</div>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default NavBar;
