import { Box, SxProps } from "@mui/material"
import Button from "@mui/material/Button"
import { ReactNode } from "react"
import * as sxStyles from './CustomeBtn.style'

interface ICustomeBtnProps {
    variant: "outlined" | "contained"
    styleObj: SxProps
    title: string
    icon: ReactNode
}

const CustomeBtn: React.FC<ICustomeBtnProps> = ({variant, styleObj, title, icon}) => {
    return (
        <Button variant={variant} sx={styleObj} startIcon={icon}>
             <Box sx={sxStyles.boxStyle}>{title}</Box>
        </Button>

    )
}

export default CustomeBtn;