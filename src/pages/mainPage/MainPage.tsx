import { useEffect } from "react"
import Box from "@mui/material/Box"
import AppUpBar from "../../components/appUpBar/AppUpBar"
import SideBar from "../../components/sideBar/SideBar"
import EmailTable from "../../components/mailTable/emailTable/EmailTable"
import { useAppDispatch } from "../../store/store.hook"
import * as sxStyles from './MainPage.style'
import { fetchContactsData } from "../../store/actions/contacts.action"

interface IMainPageProps {}

const MainPage: React.FC<IMainPageProps> = ({}) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        console.log("dispatch data")
        dispatch(fetchContactsData())
    }, [dispatch])
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