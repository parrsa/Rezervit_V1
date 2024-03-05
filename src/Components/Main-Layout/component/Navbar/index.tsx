import React, {useState} from 'react';
// Material Ui Styled Components
import {styled} from "@mui/material";
import {Header, Logo, LogoTitle, LogoImg, Links} from "./navbarStyle";
// Material Ui Icon
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// Types
import {INavList} from "../../../../Type";
// Navbar List
import {navList} from "./navList";

const Navbar = () => {
		const [openMenu, setOpenMenu] = useState<boolean>(false);
		const LogoImage = require("../../../../Assets/images/reserveLogo.png");
		
		const Ul = styled("ul")({
			display: "flex",
			alignItems: "center",
			transition: "all linear 0.5s",
			"@media(max-width:600px)": {
				padding: "1rem 0",
				transition: "all linear 0.5s",
				transform: `${openMenu ? "" : "translateX(-180%)"}`,
				width: "50%",
				height: "50vh",
				flexDirection: "column",
				background: "rgba(255, 255, 255, 0.77)",
				backdropFilter: "blur(14.5px)",
				webkitBackdropFilter: "blur(14.5px)",
			}
		});
		
		const Menu = styled("div")({
			display: "none",
			"@media(max-width:600px)": {
				padding: "0 1rem",
				display: `${openMenu ? "none" : "flex"}`,
				alignItems: "center",
				justifyContent: "center",
			}
		});
		
		const CloseMenu = styled("div")({
			display: "none",
			"@media(max-width:600px)": {
				display: `${openMenu ? "flex" : "none"}`,
			}
		})
		
		return (
			<Header>
				<Logo>
					<LogoTitle>رزرویت</LogoTitle>
					<LogoImg src={LogoImage} alt={"logo"}/>
				</Logo>
				<Ul>
					<CloseMenu onClick={() => setOpenMenu(false)}>
						<CloseIcon/>
					</CloseMenu>
					{
						navList.map((item: INavList, index: number) => {
							return (
								<Links to={item.path} key={index}>{item.label}</Links>
							)
						})
					}
				</Ul>
				<Menu onClick={() => setOpenMenu(true)}>
					<MenuIcon fontSize={"medium"}/>
				</Menu>
			</Header>
		);
	}
;

export default Navbar;