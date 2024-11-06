import { TableCell, TableRow } from "@mui/material"
import * as sxStyles from "./EmailsTableHeader.style"

interface IEmailsTableHeaderProps {}

const EmailsTableHeader: React.FC<IEmailsTableHeaderProps> = () => {
    return (
        <TableRow sx={sxStyles.tableRowStyle}>
            <TableCell>Created At</TableCell>
            <TableCell>From</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Body</TableCell>
            <TableCell>Attachments</TableCell>
        </TableRow>
    )
}

export default EmailsTableHeader