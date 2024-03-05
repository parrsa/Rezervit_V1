import {styled} from "@mui/material";

const Container = styled("div")({
	display: "flex",
	flexDirection: "column",
	justifyContent: "end",
	alignItems: "start",
	width: "100%",
	height: "93vh",
});

const Card = styled("div")({
	padding: "1rem 2rem",
	width: "60%",
	border: "2px solid #7A316F",
	borderRadius: "25px",
	display: "flex",
	flexDirection: "row-reverse",
	alignItems: "center",
	justifyContent: "space-around",
	"@media(max-width:1000px)": {
		padding: "1rem .3rem",
		width: "100%",
	}
});

const Title = styled("p")({
	fontSize: "1.8rem",
	"@media(max-width:1000px)": {
		fontSize: "1.2rem",
	}
});

export {Title, Card, Container};