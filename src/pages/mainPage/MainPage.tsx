import Box from "@mui/material/Box"
import AppUpBar from "../../components/appUpBar/AppUpBar"
import SideBar from "../../components/sideBar/SideBar"
import EmailTable from "../../components/mailTable/emailTable/EmailTable"
import * as sxStyles from './MainPage.style'

interface IMainPageProps {}

const MainPage: React.FC<IMainPageProps> = ({}) => {
    return (
        <main>
            <AppUpBar />
            <Box sx={sxStyles.boxStyle}>
                <SideBar />
                <EmailTable />
            </Box>
        </main>
    )
}

export default MainPage