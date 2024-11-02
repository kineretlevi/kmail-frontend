

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Logo from '../../assets/appLogo.PNG';
import * as sxStyles from "./AppUpBar.style";
import "./AppUpBar.css"


interface IAppBarProps {}

const AppUpBar: React.FC<IAppBarProps> = ({}) => {
    return (
      <Box sx={sxStyles.appUpBarBoxStyle}>
      <AppBar position="static" color='secondary'>
        <Toolbar sx={sxStyles.appUpBarToolbarStyle}>
          <img src={Logo} alt="logo" className="logo"/>
          <IconButton sx={sxStyles.appUpBarIconButtonStyle}>
            <AccountCircleRoundedIcon sx={sxStyles.appUpBarIconStyle}/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default AppUpBar
