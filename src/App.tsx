import { HomePage, PageRender } from 'pages'
import AppThemeProvider from 'styles/AppThemeProvider'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AboutPage from 'pages/About'


function App() {

  return (
    <AppThemeProvider>
      <Router>
      <PageRender>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
      </PageRender>
      </Router>
    </AppThemeProvider>
  )
}

export default App
