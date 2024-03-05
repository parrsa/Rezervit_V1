import React, {useState} from 'react';
// React Router Hooks
import {useNavigate, useLocation} from "react-router-dom";
// Material Ui Components
import {Box, Drawer, List, ListItem, ListItemButton, Grid, Avatar, ButtonBase} from '@mui/material';
// Material Ui Icons
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
// Material Ui Styled Components
import {Info, Title, ListTitle} from "./drawerListStyle";
// Components
import Navbar from "../Navbar";
// Types
import {DashboardProps, IDrawerList} from "../../../../Type";
// Drawer List
import drawerList from "./drawerList";

export const drawerWidth = 240;

const Dashboard = ({children}: DashboardProps) => {
	const [openMenu, setOpenMenu] = useState(true);
	const navigate = useNavigate();
	const {pathname} = useLocation();
	
	const prof = require("../../../../Assets/images/enginner.png")
	return (
		<Box sx={{display: 'flex', flexDirection: "column"}}>
			<Navbar/>
			<Drawer
				onClick={() => setOpenMenu(!openMenu)}
				variant="permanent"
				sx={{
					border: "1px solid #0000004D",
					zIndex: "1",
					[`& .MuiDrawer-paper`]: {width: drawerWidth, height: "90%", marginTop: "5.6rem"},
					"@media(max-width:700px)": {
						transition: "all linear 0.5s",
						transform: `${openMenu ? "translateY(-180%)" : ""}`,
						[`& .MuiDrawer-paper`]: {width: drawerWidth, height: "95%", marginTop: "3.5rem"}
					}
				}}
			>
				<Box>
					<Grid container flexDirection={"row-reverse"} borderBottom={"1px solid #bbb"}
					      padding={"1rem .5rem"}>
						<Grid item container xs={3} alignItems={"center"} justifyContent={"center"}>
							<Avatar sx={{width: "60px", height: "60px"}} src={prof} alt={"profile"}/>
						</Grid>
						<Grid item container xs={9}>
							<Grid item container justifyContent={"space-evenly"}>
								<Grid item>
									<ButtonBase sx={{
										background: "#7A316F2E",
										borderRadius: "10px",
										height: "fit-content",
										width: "2.5rem",
									}}>
										<EditOutlinedIcon/>
									</ButtonBase>
								</Grid>
								<Grid item>
									<Title>آراد جهانگیری</Title>
								</Grid>
							</Grid>
							<Grid item container justifyContent={"space-evenly"}>
								<Grid item sx={{
									display: "none",
									"@media(max-width:700px)": {
										display: "flex",
									}
								}}>
									<ButtonBase onClick={() => setOpenMenu(!openMenu)} sx={{
										background: "#7A316F2E",
										borderRadius: "10px",
										height: "fit-content",
										width: "2.5rem",
									}}>
										<ArrowForwardIosIcon fontSize={"small"}/>
									</ButtonBase>
								</Grid>
								<Grid item>
									<Info>09038220056</Info>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Box>
				<Box sx={{overflow: 'auto'}}>
					<List>
						{
							drawerList.map((item: IDrawerList, index: number) => (
								<ListItem key={item.title} disablePadding
								          sx={{background: `${pathname === item.path && "#7A316F2E"}`}}>
									<ListItemButton sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										gap: "0 .5rem"
									}} onClick={() => navigate(item.path, {replace: true})}>
										<ListTitle>{item.title}</ListTitle>
										<item.icon/>
									</ListItemButton>
								</ListItem>
							))
						}
					</List>
				</Box>
			</Drawer>
			{
				openMenu &&
                <ButtonBase onClick={() => setOpenMenu(!openMenu)} sx={{
					"@media(max-width:700px)": {
						background: "#7A316F2E",
						borderRadius: "10px",
						height: "fit-content",
						width: "2.5rem",
						position: "fixed",
						left: ".5rem",
						top: "5rem",
					}
				}}>
                    <MenuOpenIcon/>
                </ButtonBase>
			}
			<Box component="main" sx={{flexGrow: 1, p: 3}}>
				{children}
			</Box>
		</Box>
	);
};

export default Dashboard;