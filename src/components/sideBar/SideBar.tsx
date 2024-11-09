import * as React from 'react'
import { Box, IconButton } from '@mui/material'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import InboxRoundedIcon from '@mui/icons-material/InboxRounded'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded'
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded'
import AllInboxIcon from '@mui/icons-material/AllInbox'
import CustomeBtn from '../utilComponents/customeBtn/CustomeBtn'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/store.hook'
import { pageType } from '../../constants/types'
import { updatePageState } from '../../store/slices/page.slice'
import * as sxStyles from './SideBar.style'

interface ISideBarProps {}

const SideBar: React.FC<ISideBarProps> = () => {
  const dispatch = useAppDispatch()

  const handleCustomeBtnClick = (pageType: pageType) => {
    dispatch(updatePageState({ page: pageType }))
  }

  return (
    <Paper sx={sxStyles.paperStyle}>
      <Box sx={sxStyles.boxStyle}>
        <IconButton sx={sxStyles.iconBtnStyle}>
          <ArrowBackRoundedIcon sx={sxStyles.arrowBackIconStyle} />
        </IconButton>
      </Box>
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
        styleObj={sxStyles.btnStyle}
        title={'All Messages'}
        icon={<AllInboxIcon />}
        type={'All'}
        handleCustomeBtnClick={handleCustomeBtnClick}
      />
      <Divider />
      <CustomeBtn
        variant={'outlined'}
        styleObj={sxStyles.btnStyle}
        title={'Recieved Messages'}
        icon={<InboxRoundedIcon />}
        type={'Received'}
        handleCustomeBtnClick={handleCustomeBtnClick}
      />
      <Divider />
      <CustomeBtn
        variant={'outlined'}
        styleObj={sxStyles.btnStyle}
        title={'Sent Messages'}
        icon={<SendRoundedIcon />}
        type={'Sent'}
        handleCustomeBtnClick={handleCustomeBtnClick}
      />
      <Divider />
      <CustomeBtn
        variant={'outlined'}
        styleObj={sxStyles.btnStyle}
        title={'contacts'}
        icon={<PermContactCalendarRoundedIcon />}
        type={'Contacts'}
        handleCustomeBtnClick={handleCustomeBtnClick}
      />
    </Paper>
  )
}

export default SideBar
