import { ButtonProps } from '@mui/material';
import { memo } from 'react';
import * as S from './styles'

interface IButtonProps extends ButtonProps {
  children: React.ReactNode
}

const ButtonComponent = (props: IButtonProps) => {
  const { children } = props;
  return (
    <S.Wrapper {...props}>
      {children}
    </S.Wrapper>
  )
}


const Button = memo(ButtonComponent)

export default Button
