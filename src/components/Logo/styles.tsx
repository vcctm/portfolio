import { css, styled } from '@mui/material/styles'
import { ILogoProps } from '.'

const sizeModifier = {
  normal: {
    width: '293px',
    height: '106px'
  }
}

export const Wrapper = styled('div')<ILogoProps>`
  ${({ theme, size }) => css`
    color: ${theme.palette.common.white};
    ${!!size && sizeModifier[size]}
  `}
`
