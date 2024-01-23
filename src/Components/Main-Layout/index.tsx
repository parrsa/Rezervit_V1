import { PageLayoutProps } from "../../Type";
import Navbars from "./component/Navbar";
import Footer from "./component/Footer";
import {Grid} from "@mui/material";

const MainLayout: React.FC<PageLayoutProps> = ({ children }: PageLayoutProps) => {
    return (
        <>
            <Grid sx={{minHeight:'100vh'}}>
                <Navbars />
                {children}
            </Grid>
            <Footer />
        </>
    )
}
export default MainLayout