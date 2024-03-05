import React, {useState, useEffect} from 'react';
// Material Ui Components
import {Grid} from "@mui/material";
// Material Ui Styled Components
import {Container, Title, Item, ItemData} from "./customerListStyle";
// Axios
import axios from "axios";

const CustomerList = () => {
	const [data, setData] = useState<any>([]);
	
	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/users")
			.then(response => {
				setData(response.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, []);
	
	return (
		<Container>
			<Grid container flexDirection={"row-reverse"} justifyContent={"center"} padding={"1rem 0"} gap={"2rem"}
			      sx={{
				      width: "85%",
				      height: "90%",
				      "@media(max-width:900px)": {
						  width:"100%",
				      }
			      }}>
				{
					data.map((item: any) => {
						return (
							<Grid item container key={item.id} gap={"1rem"} lg={3.5} md={4} xs={10} sx={{
								boxShadow: " 0px 0px 6px 0px #7A316F",
								borderRadius: "10px",
								padding: "1rem"
							}}>
								<Grid item container justifyContent={"center"}>
									<Title>سالن فوتبال شماره {item.id}</Title>
								</Grid>
								<Grid item container justifyContent={"end"} alignItems={"center"} gap={"0 .2rem"}
								      flexDirection={"row-reverse"}>
									<Grid item>
									</Grid>
									<Item>:رزرو شده توسط</Item>
									<Grid item>
										<ItemData>مانی رحیمی</ItemData>
									</Grid>
								</Grid>
								<Grid item container justifyContent={"end"} alignItems={"center"} gap={"0 .2rem"}
								      flexDirection={"row-reverse"}>
									<Grid item>
										<Item>:تاریخ رزرو</Item>
									</Grid>
									<Grid item>
										<ItemData>1401/05/03</ItemData>
									</Grid>
								</Grid>
								<Grid item container justifyContent={"end"} alignItems={"center"} gap={"0 .2rem"}
								      flexDirection={"row-reverse"}>
									<Grid item>
										<Item>:تاریخ اتمام</Item>
									</Grid>
									<Grid item>
										<ItemData>1401/06/03</ItemData>
									</Grid>
								</Grid>
								
								<Grid item container justifyContent={"end"} alignItems={"center"} gap={"0 .2rem"}
								      flexDirection={"row-reverse"}>
									<Grid item>
										<Item>:روز های رزرو شده</Item>
									</Grid>
									<Grid item>
										<ItemData> یکشنبه و پنجشنبه</ItemData>
									</Grid>
								</Grid>
								<Grid item container justifyContent={"end"} alignItems={"center"} gap={"0 .2rem"}
								      flexDirection={"row-reverse"}>
									<Grid item>
										<Item>:سانس</Item>
									</Grid>
									<Grid item>
										<ItemData>7:00-8:30</ItemData>
									</Grid>
								</Grid>
								<Grid item container justifyContent={"end"} alignItems={"center"} gap={"0 .2rem"}
								      flexDirection={"row-reverse"}>
									<Grid item>
										<Item>:پرداخت شده</Item>
									</Grid>
									<Grid item>
										<ItemData>800 هزار تومان</ItemData>
									</Grid>
								</Grid>
							</Grid>
						)
					})
				}
			</Grid>
		</Container>
	);
};

export default CustomerList;