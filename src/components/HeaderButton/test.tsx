import { render, screen } from '@testing-library/react'

import HeaderButton from '.'

describe('<HeaderButton />', () => {
  it('should render the heading', () => {
    const { container } = render(<HeaderButton selected={true} to='/'>
    Home
  </HeaderButton>)

    expect(screen.getByRole('heading', { name: /HeaderButton/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
