import { useEffect } from 'react'
import { Table, TableBody, TableContainer, TableHead, Paper, TableCell, Typography, TableRow } from '@mui/material'
import { emailStructure } from '../../../constants/types'
import EmailsTableHeader from '../emailsTableHeader/EmailsTableHeader'
import EmailRecord from '../emailRecord/EmailRecord'
import * as sxStyles from '../muiTableStyle/MuiTable.style'

interface IEmailTableProps {
  emails: emailStructure[]
}

const EmailTable: React.FC<IEmailTableProps> = ({ emails }) => {
  useEffect(() => {
    console.log('emails', emails)
  })
  return (
    <TableContainer component={Paper} sx={sxStyles.tableContainerStyle}>
      <Table>
        <TableHead>
          <EmailsTableHeader />
        </TableHead>
        <TableBody>
          {emails.length === 0 ? (
            <TableRow>
              <TableCell>
                <Typography>There are no messages to show!</Typography>
              </TableCell>
            </TableRow>
          ) : (
            emails.map((email: emailStructure) => <EmailRecord email={email} key={email.id} />)
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default EmailTable
