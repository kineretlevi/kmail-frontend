

import { Box, TableCell, TableRow, Tooltip, Typography } from "@mui/material"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { emailStructure } from "../../../constants/types"
import AttachFileTag from "../../utilComponents/attachFileTag/AttachFileTag"
import * as sxStyles from './EmailRecord.style'

interface IEmailRecordProps {
    email: emailStructure
}

const EmailRecord: React.FC<IEmailRecordProps> = ({email}) => {
    return (
        <TableRow key={email.id} sx={sxStyles.tableRowStyle}>
            <TableCell>{email.createdAt.toLocaleString()}</TableCell>
            <TableCell>{email.sender}</TableCell>
            <TableCell>{email.subject}</TableCell>
            <TableCell>{email.body}</TableCell>
            <TableCell>
            {email.attachedFiles.length > 0 ? (
                <Box sx={sxStyles.boxStyle}>
                    {/* I want to show only two files */}
                    {email.attachedFiles.slice(0,2).map((file) => (
                        <Box key={file.id}>
                            <AttachFileTag fileName={file.name} />
                        </Box>
                    ))}
                    {email.attachedFiles.length > 2 && (
                        <Tooltip
                        title={
                            <Box>
                                {email.attachedFiles.map((file) => (
                                        <Typography key={file.id} variant="body2">
                                            {file.name}
                                        </Typography>
                                    ))}
                            </Box>
                        }
                        placement="top"
                        >
                            <AddRoundedIcon color="info" sx={sxStyles.addIconStyle}/>
                        </Tooltip>
                    )}
                </Box>
            ) : (
                'No attachments'
            )}
            </TableCell>
      </TableRow>
    )
}

export default EmailRecord