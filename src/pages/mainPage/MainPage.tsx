import { useEffect } from 'react'
import Box from '@mui/material/Box'
import AppUpBar from '../../components/appUpBar/AppUpBar'
import SideBar from '../../components/sideBar/SideBar'
import { useAppDispatch, useAppSelector } from '../../store/store.hook'
import { fetchContactsData } from '../../store/actions/contacts.action'
import { fetchAllEmailsData } from '../../store/actions/emails.action'
import { appUser } from '../../constants/types'
import ContentFactory from '../../components/contentFactory/ContentFactory'
import LoadingPage from '../loadingPage/LoadingPage'
import ErrorPage from '../errorPage/ErrorPage'
import * as sxStyles from './MainPage.style'

interface IMainPageProps {}

const MainPage: React.FC<IMainPageProps> = ({}) => {
  const dispatch = useAppDispatch()
  const emails = useAppSelector((state) => state.emails)
  const ui = useAppSelector((state) => state.ui)

  useEffect(() => {
    // Function to fetch all the contacts and update them in redux
    dispatch(fetchContactsData())
    // Function to fetch all the user emails and update them in redux
    dispatch(fetchAllEmailsData(appUser, emails))
  }, [dispatch])
  return (
    <main>
      <AppUpBar />
      <Box sx={sxStyles.boxStyle}>
        {ui.status === 'pending' ? (
          <LoadingPage />
        ) : ui.status === 'error' ? (
          <ErrorPage />
        ) : (
          <>
            <SideBar />
            <ContentFactory />
          </>
        )}
      </Box>
    </main>
  )
}

export default MainPage
