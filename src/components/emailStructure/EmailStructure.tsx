import { useEffect, useState } from 'react'
import { Autocomplete, Box, Button, TextField, Tooltip, Typography } from '@mui/material'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import { appEmailStructure, appUser, attachedFiles, emailStructure } from '../../constants/types'
import { useAppDispatch, useAppSelector } from '../../store/store.hook'
import { postNewEmail } from '../../store/actions/emails.action'
import AttachFileTag from '../utilComponents/attachFileTag/AttachFileTag'
import * as sxStyles from './EmailStructure.style'

interface IEmailStructureProps {
  emailDetails?: emailStructure
}

const defaultEmailValues: appEmailStructure = {
  sender: appUser,
  receiver: '',
  subject: '',
  body: '',
  attachedFile: [],
}

// Component for new email and view email
const EmailStructure: React.FC<IEmailStructureProps> = ({ emailDetails }) => {
  const dispatch = useAppDispatch()
  const contacts = useAppSelector((state) => state.contacts.contacts)
  const [newEmailDetails, setNewEmailDetails] = useState<appEmailStructure>(defaultEmailValues)
  const [uploadedFiles, setUploadedFiles] = useState<attachedFiles[]>([])

  const handleInputChange = (identifier: string, value: string | attachedFiles[]) => {
    setNewEmailDetails((prevDetails) => ({
      ...prevDetails,
      [identifier]: value,
    }))
  }

  const handleAttchedFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files
    if (!selectedFiles) return

    const filesArray: attachedFiles[] = []

    // Loop through selected files and convert them into `attachedFiles` format
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i]

      // Read file content as ArrayBuffer
      const fileContent = await file.arrayBuffer()

      filesArray.push({
        id: crypto.randomUUID(),
        filename: file.name,
        fileContent: fileContent,
      })
    }
    setUploadedFiles((prevFiles) => [...prevFiles, ...filesArray])
  }

  const handleAttchedFileClearClick = () => {
    setUploadedFiles([])
  }

  const handleUploadClick = () => {
    document.getElementById('fileInput')?.click()
  }

  const convertToFormData = (files: attachedFiles[], additionalData: Record<string, string>): FormData => {
    const formData = new FormData()

    // Append each file
    files.forEach((file) => {
      const blob = new Blob([file.fileContent])
      formData.append('files', blob, file.filename)
    })

    // Append additional fields
    Object.entries(additionalData).forEach(([key, value]) => {
      formData.append(key, value)
    })

    return formData
  }

  const handleSendEmailClick = async () => {
    const { attachedFile, ...additionalData } = newEmailDetails
    const fd = convertToFormData(newEmailDetails.attachedFile, additionalData)
    console.log('fd', fd)
    dispatch(postNewEmail(fd))
  }

  useEffect(() => {
    handleInputChange('attachedFile', uploadedFiles)
  }, [uploadedFiles])

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
            getOptionLabel={(option) => option.name}
            onChange={(_event, newValue) => {
              handleInputChange('receiver', newValue!.name)
            }}
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
            renderOption={(props, option) => {
              // React requires the key prop is to be passed directly to JSX elements rather than spread through the props object
              const { key, ...otherProps } = props
              return (
                <Box key={key} component='li' {...otherProps} display='flex' alignItems='center' gap={1}>
                  <AccountCircleRoundedIcon color='info' />
                  <Typography>{option.name}</Typography>
                </Box>
              )
            }}
          />
        )}
        <TextField
          margin='dense'
          fullWidth
          label={emailDetails ? emailDetails.subject : 'Subject'}
          variant='outlined'
          sx={sxStyles.subjectTextFieldStyle}
          onChange={(event) => handleInputChange('subject', event.target.value)}
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
          onChange={(event) => handleInputChange('body', event.target.value)}
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
          <>
            <Box sx={sxStyles.attachedFilesBox}>
              <Button
                variant='outlined'
                color='info'
                onClick={handleAttchedFileClearClick}
                sx={sxStyles.clearFilesBtnStyle}>
                Clear Files
              </Button>
              {uploadedFiles.slice(0, 6).map((file) => (
                <Box key={file.id}>
                  <AttachFileTag fileName={file.filename} />
                </Box>
              ))}
              {uploadedFiles.length > 6 && (
                <Tooltip
                  title={
                    <Box>
                      {uploadedFiles.map((file) => (
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
            <Button variant='outlined' onClick={handleUploadClick} sx={sxStyles.attachedFilesBtnStyles}>
              Attach Files
            </Button>
            <input
              id='fileInput'
              type='file'
              multiple
              onChange={(event) => handleAttchedFileChange(event)}
              style={{ display: 'none' }}
            />
          </>
        )}
        <Button
          variant='contained'
          sx={sxStyles.sendBtnStyle}
          disabled={emailDetails ? true : false}
          onClick={handleSendEmailClick}>
          Send
        </Button>
      </Box>
    </Box>
  )
}

export default EmailStructure
