import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import CustomeBtn from '../utilComponents/CustomeBtn/CustomeBtn';
import * as sxStyles from "./SideBar.style";
import { IconButton } from '@mui/material';


interface ISideBarProps {}

const SideBar: React.FC<ISideBarProps> = () => {
    return (
        <Paper sx={sxStyles.paperStyle}>
            <IconButton sx={sxStyles.iconBtnStyle}>
                <ArrowBackRoundedIcon />
            </IconButton>
            <Divider />
            <CustomeBtn variant={'contained'} styleObj={sxStyles.containedBtnStyle} title={'New Message'} icon={<ModeEditOutlineRoundedIcon />} />
            <CustomeBtn variant={'outlined'} styleObj={sxStyles.outlinedBtnStyle} title={'Recieved Messages'} icon={<InboxRoundedIcon />} />
            <CustomeBtn variant={'outlined'} styleObj={sxStyles.outlinedBtnStyle} title={'Sent Messages'} icon={<SendRoundedIcon />} />
            <CustomeBtn variant={'outlined'} styleObj={sxStyles.outlinedBtnStyle} title={'contacts'} icon={<PermContactCalendarRoundedIcon />} />
        </Paper>
    )
}

export default SideBar;




