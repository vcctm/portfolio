import { Box } from '@mui/material'
import HeaderButton from 'components/HeaderButton'
import { useLocation, useResolvedPath } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  return (
    <Box display='flex'>
      <HeaderButton selected={location.pathname === '/'} to='/'>
        Home
      </HeaderButton>
      <HeaderButton selected={location.pathname === '/about'} to='/about'>
        About
      </HeaderButton>
    </Box>
  )
}

export default Header
