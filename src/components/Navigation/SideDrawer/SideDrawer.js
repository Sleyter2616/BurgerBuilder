import React from "react";
import Logo from "../../Logo/Logo";
import navigationItems from "../NavigationItems/NavigationItems";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";

const sideDrawer = (props) => {
	//..
	return (
		<div className={classes.Sidedrawer}>
			<Logo height="11%" />
			<nav>
				<NavigationItems />
			</nav>
		</div>
	);
};

export default sideDrawer;
