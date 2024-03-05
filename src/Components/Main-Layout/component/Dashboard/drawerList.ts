import {IDrawerList} from "../../../../Type";
import StadiumIcon from "@mui/icons-material/Stadium";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerList: IDrawerList[] = [
	{
		title: "باشگاه شما",
		icon: StadiumIcon,
		path: "/adminsGym",
		auth: "Admin",
	},
	{
		title: "سالن ها",
		icon: BusinessIcon,
		path: "/adminsHalls",
		auth: "Admin",
	},
	{
		title: "لیست مشتری ها",
		icon: PersonIcon,
		path: "/customers",
		auth: "Admin",
	},
	{
		title: "خروج از حساب",
		icon: LogoutIcon,
		path: "/",
		auth: "Public",
	},
	// {
	// 	title: "رزرو های شما",
	// 	icon: AddShoppingCartIcon,
	// 	path: "/reserve",
	// 	auth: "User",
	// },
	// {
	// 	title: "کیف پول",
	// 	icon: WalletIcon,
	// 	path: "/wallet",
	// 	auth: "User",
	// },
];

export default drawerList;