import { Box } from '@mui/material'
import DarkModeToggle from 'components/DarkModeToggle'
import HeaderButton from 'components/HeaderButton'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  return (
    <Box display='flex' alignItems='center'>
      <HeaderButton selected={location.pathname === '/'} to='/'>
        Home
      </HeaderButton>
      <HeaderButton selected={location.pathname === '/about'} to='/about'>
        About
      </HeaderButton>
      <DarkModeToggle/>
    </Box>
  )
}

export default Header
