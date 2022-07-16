import { render, screen } from '@testing-library/react'

import DarkModeToggle from '.'

describe('<DarkModeToggle />', () => {
  it('should render the heading', () => {
    const { container } = render(<DarkModeToggle />)

    expect(screen.getByRole('heading', { name: /DarkModeToggle/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
