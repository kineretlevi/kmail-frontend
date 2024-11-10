import Box from '@mui/material/Box'
import LoadingGif from '../../assets/loading.gif'
import * as sxStyles from './LoadingPage.style'

interface ILoadingPageProps {}
const LoadingPage: React.FC<ILoadingPageProps> = () => {
  return (
    <Box sx={sxStyles.boxWrapperStyle}>
      <Box sx={sxStyles.boxStyle}>
        <img src={LoadingGif} alt='loading...' className='gif' />
      </Box>
    </Box>
  )
}

export default LoadingPage
