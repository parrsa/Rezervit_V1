import {styled} from "@mui/material";
import {Link} from "react-router-dom";

const Header = styled("div")({
	background: "#fff",
	zIndex: "4",
	position: "fixed",
	width: "100%",
	borderBottom: "1px solid #00000026",
	display: "flex",
	flexDirection: "row-reverse",
	alignItems: "center",
	gap: "0 3rem",
	"@media(max-width:600px)": {
		height: "7vh",
		flexDirection: "row",
		alignItems: "unset",
		justifyContent: "space-between",
		gap: "0",
		transition: "all linear 0.5s",
		
	}
});

const Logo = styled("div")({
	height: "fit-content",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	padding: "0 2.8rem",
	"@media(max-width:600px)": {
		padding: ".5rem",
	}
	
});

const LogoTitle = styled("p")({
	fontSize: "1.8rem",
	fontWeight: "bold",
	"@media(max-width:600px)": {
		fontSize: "1.4rem",
	}
});

const LogoImg = styled("img")({
	width: "35px",
	height: "35px",
	objectFit: "contain",
	"@media(max-width:600px)": {
		width: "30px",
		height: "30px",
	}
});

const Links = styled(Link)({
	textDecoration: "none",
	fontSize:"1.1rem",
	color: "#000",
	margin: "2rem"
});


export {Links, Header, Logo, LogoTitle, LogoImg};