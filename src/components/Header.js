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
import SignUpModal from './SignUpModal';
import { Link } from 'react-scroll';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const screenWindowWidth = window.innerWidth > 500 ? -150 : -350;

	return (
		<Navbar className="bg-white Small shadow" dark sticky="top" expand="lg">
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
					{/* <div>{screenWindowWidth}</div>
					<div>{window.innerWidth}</div> */}

					<Link
						to="HomePage"
						spy={true}
						smooth={true}
						offset={-300}
						duration={500}
						className="nav-link"
						onClick={() => setMenuOpen(!menuOpen)}>
						Home
					</Link>
					<Link
						to="AboutPage"
						spy={true}
						smooth={true}
						offset={screenWindowWidth}
						duration={500}
						className="nav-link"
						onClick={() => setMenuOpen(!menuOpen)}>
						About
					</Link>
					<Link
						to="ClassesPage"
						spy={true}
						smooth={true}
						offset={screenWindowWidth}
						duration={500}
						className="nav-link"
						onClick={() => setMenuOpen(!menuOpen)}>
						Classes
					</Link>
					<Link
						to="PricingPage"
						spy={true}
						smooth={true}
						offset={screenWindowWidth}
						duration={500}
						className="nav-link"
						onClick={() => setMenuOpen(!menuOpen)}>
						Pricing
					</Link>
					{/* <NavItem>
						<NavLink className="nav-link" to="/">
							Home
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" to="/AboutPage">
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
					</NavItem> */}
					<SignUpModal></SignUpModal>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Header;
