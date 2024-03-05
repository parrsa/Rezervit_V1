import React from 'react';
import {Button, Grid} from "@mui/material";
import {Container, Title, Card} from "./nothingStyle";

const Nothing = () => {
	return (
		<Container>
			<Grid container alignItems={"start"} justifyContent={"center"} padding={"1rem 0"}
			      sx={{
				      width: "85%",
				      height: "90%",
				      "@media(max-width:1000px)": {
					      width: "100%",
				      }
			      }}>
				<Card>
					<Title>!هنوز هیچ مجموعه ای رزرو نکردید</Title>
					<Button variant={"contained"} color={"secondary"}
					        sx={{
						        width: "35%", borderRadius: "10px", fontFamily: "Vazirmatn", fontSize: "1.2rem",
						        "@media(max-width:1000px)": {
							        fontSize: "1rem"
						        }
					        }}>رزرو
						مجموعه</Button>
				</Card>
			</Grid>
		</Container>
	);
};

export default Nothing;