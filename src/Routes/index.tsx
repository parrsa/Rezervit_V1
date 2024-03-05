import {AllRoutes} from "../Type";
import MainPages from '../Pages/MainPages/index';
import AdminForm from "../Pages/AdminForm";
import CustomerList from "../Pages/CustomerList";
import UserSignup from "../Pages/UserSignup";
import UserReserve from "../Pages/UserReserve";
import Wallet from "../Pages/Wallet";
import AdminGym from "../Pages/AdminGym";

const routes: AllRoutes[] = [
	{
		type: "link",
		name: "home",
		key: "home",
		route: "/",
		component: <MainPages/>
	},
	{
		type: "link",
		name: "admin form",
		key: "adminForm",
		route: "/adminForm",
		component: <AdminForm/>
	},
	{
		type: "link",
		name: "customerList",
		key: "customerList",
		route: "/customers",
		component: <CustomerList/>
	},
	{
		type: "link",
		name: "UserSignup",
		key: "UserSignup",
		route: "/signup",
		component: <UserSignup/>
	},
	{
		type: "link",
		name: "UserReserve",
		key: "UserReserve",
		route: "/reserve",
		component: <UserReserve/>
	},
	{
		type: "link",
		name: "wallet",
		key: "wallet",
		route: "/wallet",
		component: <Wallet/>
	},
	{
		type: "link",
		name: "admin gym",
		key: "adminGym",
		route: "/adminsGym",
		component: <AdminGym/>
	},
	{
		type: "link",
		name: "admin halls",
		key: "adminHalls",
		route: "/adminsHalls",
		component: <AdminGym/>
	},
]

export default routes
