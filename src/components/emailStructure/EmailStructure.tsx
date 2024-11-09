import { Autocomplete, Box, Button, TextField, Typography } from '@mui/material'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import { appUser, emailStructure } from '../../constants/types'
import { useAppSelector } from '../../store/store.hook'
import AttachFileTag from '../utilComponents/attachFileTag/AttachFileTag'
import * as sxStyles from './EmailStructure.style'

interface IEmailStructureProps {
  emailDetails?: emailStructure
}

const EmailStructure: React.FC<IEmailStructureProps> = ({ emailDetails }) => {
  const contacts = useAppSelector((state) => state.contacts.contacts)

  return (
    <Box sx={sxStyles.mainBoxStyle}>
      <Typography sx={sxStyles.titleTypographyStyle}>{emailDetails ? 'Email Details' : 'New Message'}</Typography>
      <Box sx={sxStyles.selectContactBoxStyle}>
        <TextField
          margin='dense'
          fullWidth
          label={'From'}
          value={emailDetails ? emailDetails.sender : appUser}
          variant='outlined'
          sx={sxStyles.subjectTextFieldStyle}
          disabled={true}
        />
        {emailDetails ? (
          <TextField
            margin='dense'
            fullWidth
            label={'To'}
            value={emailDetails.receiver}
            variant='outlined'
            disabled={true}
          />
        ) : (
          <Autocomplete
            disablePortal
            options={contacts}
            getOptionLabel={(option) => option.name} // Display the name of each contact
            renderInput={(params) => (
              <TextField
                {...params}
                label='Select a Contact'
                variant='outlined'
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <Box display='flex' alignItems='center' gap={1}>
                      <AccountCircleRoundedIcon color='info' />
                    </Box>
                  ),
                }}
              />
            )}
            renderOption={(props, option) => (
              <Box component='li' {...props} display='flex' alignItems='center' gap={1}>
                <AccountCircleRoundedIcon color='info' />
                <Typography>{option.name}</Typography>
              </Box>
            )}
          />
        )}
        <TextField
          margin='dense'
          fullWidth
          label={emailDetails ? emailDetails.subject : 'Subject'}
          variant='outlined'
          sx={sxStyles.subjectTextFieldStyle}
          disabled={emailDetails ? true : false}
        />
        <TextField
          margin='dense'
          fullWidth
          variant='outlined'
          multiline
          rows={10}
          sx={sxStyles.bodyTextFieldStyle}
          label={emailDetails ? emailDetails.body : ''}
          disabled={emailDetails ? true : false}
        />
        {emailDetails ? (
          emailDetails.attachedFile && emailDetails.attachedFile.length > 0 ? (
            <Box sx={sxStyles.attachedFilesBox}>
              {emailDetails.attachedFile.map((file) => (
                <Box key={file.id}>
                  <AttachFileTag fileName={file.filename} />
                </Box>
              ))}
            </Box>
          ) : (
            <Typography sx={sxStyles.noAttachmentTypographyStyle}>No attachment files</Typography>
          )
        ) : (
          <Button variant='outlined' sx={sxStyles.attachedFilesBtnStyles}>
            Attach Files
          </Button>
        )}
        <Button variant='contained' disabled={emailDetails ? true : false}>
          Send
        </Button>
      </Box>
    </Box>
  )
}

export default EmailStructure
