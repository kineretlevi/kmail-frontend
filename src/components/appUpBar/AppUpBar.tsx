import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import Logo from '../../assets/logoK.PNG'
import * as sxStyles from './AppUpBar.style'
import './AppUpBar.css'

interface IAppBarProps {}

// Application up bar, it will be displayed on all the pages in the app.
const AppUpBar: React.FC<IAppBarProps> = ({}) => {
  return (
    <Box sx={sxStyles.appUpBarBoxStyle}>
      <AppBar position='static' color='secondary'>
        <Toolbar sx={sxStyles.appUpBarToolbarStyle}>
          <img src={Logo} alt='logo' className='logo' />
          <IconButton sx={sxStyles.appUpBarIconButtonStyle}>
            <AccountCircleRoundedIcon color='info' sx={sxStyles.appUpBarIconStyle} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default AppUpBar
