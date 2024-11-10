import Box from '@mui/material/Box'
import * as sxStyles from './ErrorPage.style'

interface IErrorPageProps {}

const ErrorPage: React.FC<IErrorPageProps> = () => {
  return (
    <Box sx={sxStyles.boxStyle}>
      <h1>An Error Accured :(</h1>
      <h2>Please try againg in few minutes</h2>
    </Box>
  )
}

export default ErrorPage
