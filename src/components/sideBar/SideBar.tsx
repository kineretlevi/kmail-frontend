import * as React from 'react'
import { Box } from '@mui/material'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import InboxRoundedIcon from '@mui/icons-material/InboxRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded'
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded'
import AllInboxIcon from '@mui/icons-material/AllInbox'
import { useAppDispatch, useAppSelector } from '../../store/store.hook'
import { pageType } from '../../constants/types'
import { updatePageState } from '../../store/slices/page.slice'
import CustomeBtn from '../utilComponents/customeBtn/CustomeBtn'
import * as sxStyles from './SideBar.style'

interface ISideBarProps {}

const SideBar: React.FC<ISideBarProps> = () => {
  const dispatch = useAppDispatch()
  const page = useAppSelector((state) => state.page.page)

  const handleCustomeBtnClick = (pageType: pageType) => {
    dispatch(updatePageState({ page: pageType }))
  }

  return (
    <Paper sx={sxStyles.paperStyle}>
      <Box sx={sxStyles.boxStyle}></Box>
      <Divider />
      <CustomeBtn
        variant={'contained'}
        styleObj={sxStyles.btnStyle}
        title={'New Message'}
        icon={<ModeEditOutlineRoundedIcon />}
        type={'New Email'}
        handleCustomeBtnClick={handleCustomeBtnClick}
      />
      <Divider />
      <CustomeBtn
        variant={'outlined'}
        styleObj={page === 'All' ? sxStyles.clickedBtnStyle : sxStyles.btnStyle}
        title={'All Messages'}
        icon={<AllInboxIcon />}
        type={'All'}
        handleCustomeBtnClick={handleCustomeBtnClick}
      />
      <Divider />
      <CustomeBtn
        variant={'outlined'}
        styleObj={page === 'Received' ? sxStyles.clickedBtnStyle : sxStyles.btnStyle}
        title={'Recieved Messages'}
        icon={<InboxRoundedIcon />}
        type={'Received'}
        handleCustomeBtnClick={handleCustomeBtnClick}
      />
      <Divider />
      <CustomeBtn
        variant={'outlined'}
        styleObj={page === 'Sent' ? sxStyles.clickedBtnStyle : sxStyles.btnStyle}
        title={'Sent Messages'}
        icon={<SendRoundedIcon />}
        type={'Sent'}
        handleCustomeBtnClick={handleCustomeBtnClick}
      />
      <Divider />
      <CustomeBtn
        variant={'outlined'}
        styleObj={page === 'Contacts' ? sxStyles.clickedBtnStyle : sxStyles.btnStyle}
        title={'contacts'}
        icon={<PermContactCalendarRoundedIcon />}
        type={'Contacts'}
        handleCustomeBtnClick={handleCustomeBtnClick}
      />
    </Paper>
  )
}

export default SideBar
