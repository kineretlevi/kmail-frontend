import { ThemeProvider } from '@mui/material'
import MainPage from './pages/mainPage/MainPage'
import { theme } from './theme/customeTheme'
import './App.css'

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
    </div>
  )
}

export default App
