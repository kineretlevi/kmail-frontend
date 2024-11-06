import Box from "@mui/material/Box"
import AppUpBar from "../components/appUpBar/AppUpBar"
import SideBar from "../components/sideBar/SideBar"

interface IMainPageProps {}

const MainPage: React.FC<IMainPageProps> = ({}) => {
    return (
        <main>
            <AppUpBar />
            <Box>
                <SideBar />

            </Box>
        </main>
    )
}

export default MainPage