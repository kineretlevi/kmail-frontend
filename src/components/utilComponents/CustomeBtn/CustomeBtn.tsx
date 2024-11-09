import { Box, SxProps } from '@mui/material'
import Button from '@mui/material/Button'
import { ReactNode } from 'react'
import { pageType } from '../../../constants/types'
import * as sxStyles from './CustomeBtn.style'

interface ICustomeBtnProps {
  variant: 'outlined' | 'contained'
  styleObj: SxProps
  title: string
  icon: ReactNode
  type: pageType
  handleCustomeBtnClick: (pageType: pageType) => void
}

const CustomeBtn: React.FC<ICustomeBtnProps> = ({ variant, styleObj, title, icon, type, handleCustomeBtnClick }) => {
  return (
    <Button variant={variant} sx={styleObj} startIcon={icon} onClick={() => handleCustomeBtnClick(type)}>
      <Box sx={sxStyles.boxStyle}>{title}</Box>
    </Button>
  )
}

export default CustomeBtn
