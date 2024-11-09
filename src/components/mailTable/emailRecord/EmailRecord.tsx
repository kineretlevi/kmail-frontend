import { Box, TableCell, TableRow, Tooltip, Typography } from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import dayjs from 'dayjs'
import { emailStructure } from '../../../constants/types'
import AttachFileTag from '../../utilComponents/attachFileTag/AttachFileTag'
import * as sxStyles from '../muiTableStyle/MuiTable.style'
import { useAppDispatch } from '../../../store/store.hook'
import { updatePageState } from '../../../store/slices/page.slice'
import { updateEmailDetailsState } from '../../../store/slices/emailDetails.slice'
// import { useEffect } from 'react'

interface IEmailRecordProps {
  email: emailStructure
}

const EmailRecord: React.FC<IEmailRecordProps> = ({ email }) => {
  const dispatch = useAppDispatch()

  const handleEmailRowClick = () => {
    dispatch(updateEmailDetailsState({ emailDetails: email }))
    dispatch(updatePageState({ page: 'Email' }))
  }
  //   useEffect(() => {
  //     console.log('emails in email record', email)
  //   }, [])
  return (
    <TableRow key={email.id} sx={sxStyles.tableRecordRowStyle} onClick={handleEmailRowClick}>
      <TableCell sx={sxStyles.dateTableCellStyle}>
        {dayjs(email.createdAt.toLocaleString()).format('DD-MM-YYYY HH:mm:ss')}
      </TableCell>
      <TableCell>{email.sender}</TableCell>
      <TableCell>{email.receiver}</TableCell>
      <TableCell>{email.subject}</TableCell>
      <TableCell>{email.body}</TableCell>
      <TableCell>
        {email.attachedFile && email.attachedFile.length > 0 ? (
          <Box sx={sxStyles.boxStyle}>
            {/* I want to show only two files */}
            {email.attachedFile.slice(0, 2).map((file) => (
              <Box key={file.id}>
                <AttachFileTag fileName={file.filename} />
              </Box>
            ))}
            {email.attachedFile.length > 2 && (
              <Tooltip
                title={
                  <Box>
                    {email.attachedFile.map((file) => (
                      <Typography key={file.id} variant='body2'>
                        {file.filename}
                      </Typography>
                    ))}
                  </Box>
                }
                placement='top'>
                <AddRoundedIcon color='info' sx={sxStyles.addIconStyle} />
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
