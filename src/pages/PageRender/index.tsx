import { alpha, Box, Container, useTheme } from '@mui/material'
import Header from 'components/Header'
import { Wrapper } from './styles'

import {AnimatePresence} from 'framer-motion'

interface IPageRenderProps {
  children: React.ReactNode
}

export const PageRender = ({ children }: IPageRenderProps) => {
  const theme = useTheme()

  return (
    <Wrapper>
      <AnimatePresence>
        <Box
          sx={{
            backgroundColor: alpha(theme.palette.common.black, 0.9)
          }}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          alignContent={'center'}
          justifyContent={'center'}>
          <Container
            maxWidth={'lg'}
            sx={{
              width: 'unset',
              margin: '0 auto',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              paddingY: '24px'
            }}>
            <Header />
            <Box
              flexGrow={1}
              display="flex"
              paddingY={4}
              minWidth={600}
            >
              {children}
            </Box>
          </Container>
        </Box>
      </AnimatePresence>
    </Wrapper>
  )
}

export default PageRender
