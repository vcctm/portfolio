import { Story, Meta } from "@storybook/react";
import DarkModeToggle from '.'

export default {
  title: 'DarkModeToggle',
  component: DarkModeToggle
} as Meta

export const Default: Story = () => <DarkModeToggle />
