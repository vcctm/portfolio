import HomePageTemplate from 'templates/HomePageTemplate'
import { PageTransitionWrapper } from 'animations'

export const HomePage = () => {
  return (
    <PageTransitionWrapper>
      <HomePageTemplate />
    </PageTransitionWrapper>
  )
}

export default HomePage
