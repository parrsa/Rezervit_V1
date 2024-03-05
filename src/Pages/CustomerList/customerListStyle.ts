import { styled } from "@mui/material";

const Container = styled("div")({
	display: "flex",
	flexDirection: "column",
	justifyContent: "end",
	alignItems: "start",
	width: "100%",
	height: "93vh",
});

const Title = styled("p")({
	fontSize: "1.4rem",
	fontWeight: "600",
});
const Item = styled("p")({
	color: "#000000B2",
});
const ItemData = styled("p")({
	fontSize: "1.2rem",
	color: "#000000E5",
});

export { Item, ItemData, Title, Container };