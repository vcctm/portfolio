import { render, screen } from '@testing-library/react'

import DonwloadLottie from '.'

describe('<DonwloadLottie />', () => {
  it('should render the heading', () => {
    const { container } = render(<DonwloadLottie />)

    expect(screen.getByRole('heading', { name: /DonwloadLottie/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
