import { createTheme } from "@mui/material";
import colors from "./base/colors";
import Typography from "./components/MTypography";
const theme = createTheme({
    direction: "rtl",
    palette: { ...colors },
    components: {
        MuiTypography: { ...Typography }
    }
})
export default theme