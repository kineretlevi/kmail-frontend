import Button from "@mui/material/Button"
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Box from "@mui/material/Box";
import * as sxStyles from "./AttachFileTag.style"

interface IAttachFileTag {
    fileName: string
}

const AttachFileTag: React.FC<IAttachFileTag> = ({fileName}) => {
    return (
        <Button 
        variant="outlined" 
        color="info" 
        sx={sxStyles.btnStyle} 
        startIcon={
            <Box sx={sxStyles.boxStyle}>
                <AttachFileIcon sx={sxStyles.iconBtnStyle}/>
            </Box>
        }
        >
            <Box sx={sxStyles.boxForTxtStyle}>{fileName.length > 10 ? fileName.slice(0,7) + "..." : fileName}</Box>
        </Button>
    )
}

export default AttachFileTag