import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/miranda logo/i).parentElement).toHaveStyle({
      width: '293px'
    })
  })
})
