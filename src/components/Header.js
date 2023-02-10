import { useState } from 'react';
import {
	Navbar,
	NavbarBrand,
	Collapse,
	NavbarToggler,
	Nav,
	NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import React from 'react';
const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<Navbar className="bg-white" dark sticky="top" expand="lg">
			<NavbarBrand href="/">
				<h1 className="text-[#fb5a6e] ">
					<span className="RedAcc"> n</span>
					<span className="GreyAcc">itrofit</span>
				</h1>
			</NavbarBrand>

			<NavbarToggler
				className="custom-toggler"
				onClick={() => setMenuOpen(!menuOpen)}
			/>

			<Collapse isOpen={menuOpen} navbar>
				<Nav className="ms-auto navbar d-flex flex-column flex-lg-row ">
					<NavItem>
						<NavLink className="nav-link" to="/">
							Home
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" to="/About">
							About
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" to="/Classes">
							Classes
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" to="/Pricing">
							Pricing
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" to="/Sign-Up">
							Sign-Up
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" to="/contact">
							Contact
						</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Header;
