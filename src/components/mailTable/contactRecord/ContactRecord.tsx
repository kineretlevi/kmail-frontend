import dayjs from 'dayjs'
import { TableCell, TableRow } from '@mui/material'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import { contactDetails } from '../../../constants/types'
import * as sxStyles from '../muiTableStyle/MuiTable.style'

interface IContactRecordProps {
  contact: contactDetails
}

// Component of the contact table record details.
const ContactRecord: React.FC<IContactRecordProps> = ({ contact }) => {
  return (
    <TableRow key={contact.id} sx={sxStyles.tableRecordRowStyle}>
      <TableCell>
        <AccountCircleRoundedIcon color='info' sx={sxStyles.appUpBarIconStyle} />
      </TableCell>
      <TableCell>{contact.name}</TableCell>
      <TableCell>{dayjs(contact.createdAt.toLocaleString()).format('DD-MM-YYYY HH:mm:ss')}</TableCell>
    </TableRow>
  )
}

export default ContactRecord
