import { useEffect } from 'react'
import Box from '@mui/material/Box'
import AppUpBar from '../../components/appUpBar/AppUpBar'
import SideBar from '../../components/sideBar/SideBar'
import { useAppDispatch, useAppSelector } from '../../store/store.hook'
import { fetchContactsData } from '../../store/actions/contacts.action'
import { fetchAllEmailsData } from '../../store/actions/emails.action'
import ContentFactory from '../../components/contentFactory/ContentFactory'
import * as sxStyles from './MainPage.style'

interface IMainPageProps {}

const MainPage: React.FC<IMainPageProps> = ({}) => {
  const dispatch = useAppDispatch()
  const emails = useAppSelector((state) => state.emails)

  useEffect(() => {
    // Function to fetch all the contacts and update them in redux
    dispatch(fetchContactsData())
    // Function to fetch all the user emails and update them in redux
    dispatch(fetchAllEmailsData('kineret@kmail.com', emails))
  }, [dispatch])
  return (
    <main>
      <AppUpBar />
      <Box sx={sxStyles.boxStyle}>
        <SideBar />
        <ContentFactory />
      </Box>
    </main>
  )
}

export default MainPage
