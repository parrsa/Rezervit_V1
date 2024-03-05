// Types
import {PageLayoutProps} from "../../Type";
// Material Ui Components
import {Grid} from "@mui/material";
// Components
import Dashboard from "./component/Dashboard";

const MainLayout: React.FC<PageLayoutProps> = ({children}: PageLayoutProps) => {
	return (
		
		<Grid sx={{minHeight: "100%"}}>
			<Dashboard>
				{children}
			</Dashboard>
		</Grid>
	
	)
}
export default MainLayout;