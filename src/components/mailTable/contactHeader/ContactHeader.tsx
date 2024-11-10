import { TableCell, TableRow } from '@mui/material'
import * as sxStyles from '../muiTableStyle/MuiTable.style'

interface IContactTableHeaderProps {}

// Component of the contacts table header details.
const ContactTableHeader: React.FC<IContactTableHeaderProps> = () => {
  return (
    <TableRow sx={sxStyles.tableRowStyle}>
      {/* Place for icon */}
      <TableCell></TableCell>
      <TableCell>Name</TableCell>
      <TableCell>Added At</TableCell>
    </TableRow>
  )
}

export default ContactTableHeader
