import { TableCell, TableRow } from '@mui/material'
import * as sxStyles from '../muiTableStyle/MuiTable.style'

interface IEmailsTableHeaderProps {}

// Component of the emails table header details.
const EmailsTableHeader: React.FC<IEmailsTableHeaderProps> = () => {
  return (
    <TableRow sx={sxStyles.tableRowStyle}>
      <TableCell>Created At</TableCell>
      <TableCell>From</TableCell>
      <TableCell>To</TableCell>
      <TableCell>Subject</TableCell>
      <TableCell>Body</TableCell>
      <TableCell>Attachments</TableCell>
    </TableRow>
  )
}

export default EmailsTableHeader
