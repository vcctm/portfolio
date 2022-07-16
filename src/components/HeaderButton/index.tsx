import { alpha, Button, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'

interface IHeaderProps {
  children: React.ReactNode
  selected: boolean
  to: string
}

const HeaderButton = ({ children, selected, to }: IHeaderProps) => {
  const theme = useTheme()
  return (
    <Link
      to={to}
      style={{
        color: 'unset',
        textDecoration: 'unset'
      }}>
      <Button variant='text'>
        {selected ? (
           <Typography fontWeight={'bold'}>
          {children}
          </Typography>
        ) : (
          <Typography color={
            alpha(theme.palette.common.white, 0.4)
          }>{children}</Typography>
        )}
      </Button>
    </Link>
  )
}

export default HeaderButton
