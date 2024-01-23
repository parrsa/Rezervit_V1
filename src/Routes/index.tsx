import {AllRoutes} from "../Type"
import MainPages from '../Pages/MainPages/index'
const routes: AllRoutes[] = [
    {
        type: "link",
        name: "home",
        key: "home",
        route: "/",
        component: <MainPages/>
    }


]

export default routes
