import { Table, TableBody, TableContainer, TableHead, Paper, TableCell, Typography, TableRow } from '@mui/material'
import { contactDetails } from '../../../constants/types'
import { useAppSelector } from '../../../store/store.hook'
import ContactRecord from '../contactRecord/ContactRecord'
import ContactTableHeader from '../contactHeader/ContactHeader'
import * as sxStyles from '../muiTableStyle/MuiTable.style'

interface IContactTableProps {}

// Component of contacts table using mui table.
const ContactTable: React.FC<IContactTableProps> = () => {
  const contacts = useAppSelector((state) => state.contacts.contacts)

  return (
    <TableContainer component={Paper} sx={sxStyles.tableContainerStyle}>
      <Table>
        <TableHead>
          <ContactTableHeader />
        </TableHead>
        <TableBody>
          {contacts.length === 0 ? (
            <TableRow>
              <TableCell>
                <Typography>There are no contacts to show!</Typography>
              </TableCell>
            </TableRow>
          ) : (
            contacts.map((contact: contactDetails) => <ContactRecord contact={contact} key={contact.id} />)
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ContactTable
