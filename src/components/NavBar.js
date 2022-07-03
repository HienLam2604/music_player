import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Nav, NavItem, Button, Input } from "reactstrap";
import Home from "./Home";
import Explore from "./Explore";
import Library from "./Library";
import AvatarLogo from "../asset/img/avatar.jpg";
import "../App.css";
function NavBar() {
	return (
		<div className="h-auto">
			<Nav style={{ padding: "25px 0px 25px 290px" }}>
				<NavItem>
					<Link to="/">
						<Button color="white">
							<i className="fa fa-chevron-left"></i>
						</Button>
					</Link>
					<Link to="/">
						<Button color="white">
							<i className="fa fa-chevron-right"></i>
						</Button>
					</Link>
				</NavItem>
				<div
					style={{
						display: "flex",
						paddingLeft: "400px",
						paddingRight: "240px",
					}}
				>
					<NavItem style={{ paddingRight: "50px" }}>
						<Link to="/" className="navBtn btnActive">
							Home
						</Link>
					</NavItem>
					<NavItem style={{ paddingRight: "50px" }}>
						<Link to="/explore" className="navBtn ">
							Explore
						</Link>
					</NavItem>
					<NavItem>
						<Link to="/library" className="navBtn">
							Library
						</Link>
					</NavItem>
				</div>
				<NavItem>
					<Input type="text" placeholder="search" />
				</NavItem>
				<NavItem className="ps-3">
					<img width={"35px"} src={AvatarLogo} alt="avatar" />
				</NavItem>
			</Nav>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/explore" element={<Explore />} />
				<Route path="/library" element={<Library />} />
			</Routes>
		</div>
	);
}

export default NavBar;
