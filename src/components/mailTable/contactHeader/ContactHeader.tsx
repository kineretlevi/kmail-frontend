import { TableCell, TableRow } from '@mui/material'
import * as sxStyles from '../muiTableStyle/MuiTable.style'

interface IContactTableHeaderProps {}

const ContactTableHeader: React.FC<IContactTableHeaderProps> = () => {
  return (
    <TableRow sx={sxStyles.tableRowStyle}>
      {/* For icon */}
      <TableCell></TableCell>
      <TableCell>Name</TableCell>
      <TableCell>Added At</TableCell>
    </TableRow>
  )
}

export default ContactTableHeader
