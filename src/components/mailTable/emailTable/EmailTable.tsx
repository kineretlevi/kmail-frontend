import {
  Table, TableBody, TableContainer, TableHead, Paper,
} from '@mui/material';
import { emailStructure } from '../../../constants/types';
import EmailsTableHeader from '../emailsTableHeader/EmailsTableHeader';
import EmailRecord from '../emailRecord/EmailRecord';
import * as sxStyles from './EmailTable.style';

interface IEmailTable {}

const emails: emailStructure[] = [
  {
    id: '1',
    sender: 'john@example.com',
    receiver: 'jane@example.com',
    subject: 'Project Update',
    body: 'Here is the latest update on the project...',
    createdAt: new Date(),
    attachedFiles: [{ id: '1', name: 'project-update.pdf', file: 'file-data' }],
  },
  {
    id: '2',
    sender: 'alice@example.com',
    receiver: 'bob@example.com',
    subject: 'Meeting Agenda',
    body: 'Please find the agenda attached...',
    createdAt: new Date(),
    attachedFiles: [
      { id: '2', name: 'agenda.pdf', file: 'file-data' },
      { id: '3', name: 'notes.txt', file: 'file-data' },
      { id: '4', name: 'notes.txt', file: 'file-data' }
      ],
    },
  ];

const EmailTable: React.FC<IEmailTable> = () => {
  return (
    <TableContainer component={Paper} sx={sxStyles.tableContainerStyle}>
      <Table>
        <TableHead>
          <EmailsTableHeader />
        </TableHead>
        <TableBody>
          {emails.map((email: emailStructure) => (
            <EmailRecord email={email} key={email.id}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EmailTable
