import React from 'react';
import {Grid, TextField} from "@mui/material";
import {Label, RedStar} from "./userSignupStyle";
import Minput from "../../CustomMui/Minput";
import Mbutton from "../../CustomMui/Mbutton";

const UserSignUp = () => {
	return (
		<Grid container padding={"2rem"} justifyContent={"center"} alignItems={"center"}
		      columnSpacing={"1.5rem"} rowSpacing={"4rem"} flexDirection={"row-reverse"}>
			<Grid item container lg={5} justifyContent={"end"}>
				<Minput variant={"outlined"} placeholder={"نام"} required/>
			</Grid>
			<Grid item container lg={5} justifyContent={"end"}>
				<Minput variant={"outlined"} placeholder={"نام"} required/>
			</Grid>
			<Grid item container lg={5} justifyContent={"end"}>
				<Minput variant={"outlined"} placeholder={"نام"} required/>
			</Grid>
			<Grid item container lg={5} justifyContent={"end"}>
				<Minput variant={"outlined"} placeholder={"نام"} required/>
			</Grid>
			<Grid item container lg={5} justifyContent={"end"}>
				<Minput variant={"outlined"} placeholder={"نام"} required/>
			</Grid>
			<Grid item container lg={5} justifyContent={"end"}>
				<Mbutton variant={"contained"}>ثبت</Mbutton>
			</Grid>
		</Grid>
	);
};

export default UserSignUp;