import * as React from 'react';
import { Box, IconButton } from '@mui/material';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import CustomeBtn from '../utilComponents/customeBtn/CustomeBtn';
import * as sxStyles from "./SideBar.style";

interface ISideBarProps {}

const SideBar: React.FC<ISideBarProps> = () => {
    return (
        <Paper sx={sxStyles.paperStyle}>
            <Box sx={sxStyles.boxStyle}>
                <IconButton sx={sxStyles.iconBtnStyle}>
                    <ArrowBackRoundedIcon sx={sxStyles.arrowBackIconStyle}/>
                </IconButton>
            </Box>
            <Divider />
            <CustomeBtn variant={'contained'} styleObj={sxStyles.btnStyle} title={'New Message'} icon={<ModeEditOutlineRoundedIcon />} />
            <Divider />
            <CustomeBtn variant={'outlined'} styleObj={sxStyles.btnStyle} title={'Recieved Messages'} icon={<InboxRoundedIcon />} />
            <Divider />
            <CustomeBtn variant={'outlined'} styleObj={sxStyles.btnStyle} title={'Sent Messages'} icon={<SendRoundedIcon />} />
            <Divider />
            <CustomeBtn variant={'outlined'} styleObj={sxStyles.btnStyle} title={'contacts'} icon={<PermContactCalendarRoundedIcon />} />
        </Paper>
    )
}

export default SideBar;