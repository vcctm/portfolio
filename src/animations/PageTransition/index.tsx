import { alpha, useTheme } from '@mui/material'
import { motion } from 'framer-motion'

interface IPageTransitionWrapper {
  children: React.ReactNode
}

export const PageTransitionWrapper = ({ children }: IPageTransitionWrapper) => {
  const theme = useTheme()

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0
      }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '48px 96px',
        width: '100%',
        borderRadius: '8px',
        backgroundColor: alpha(theme.palette.common.white, 0.01)
      }}>
      {children}
    </motion.div>
  )
}

export default PageTransitionWrapper
