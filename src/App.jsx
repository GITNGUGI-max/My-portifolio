

import Navbar from './components/Navbar'


import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import SkillsPage from './pages/SkillsPage'
import EducationPage from './pages/EducationPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'

function App() {


  return (
    <>
    <Router >
      <div className='content'>
      <div className='nav'>
      <Navbar/>
      </div>
      <div className="main">
      <Routes >
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/about' element={<AboutPage/>}/>
        <Route exact path='/skills' element={<SkillsPage/>}/>
        <Route exact path='/projects' element={<ProjectPage/>}/>  
        <Route exact path='/education' element={<EducationPage/>}/>
        <Route exact path='/blog' element={<BlogPage/>}/>
        <Route exact path='/contact' element={<ContactPage/>}/>
      </Routes>
      </div>
      </div>
      </Router>
    </>
  )
}

export default App
