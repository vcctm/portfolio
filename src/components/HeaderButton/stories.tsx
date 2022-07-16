import { Story, Meta } from '@storybook/react'
import HeaderButton from '.'

export default {
  title: 'HeaderButton',
  component: HeaderButton
} as Meta

export const Default: Story = () => (
  <HeaderButton selected={true} to='/'>
    Home
  </HeaderButton>
)
