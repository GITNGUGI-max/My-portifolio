import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Navbar = () => {
  return (
    <>
    <div>
        <div className="profile">
        <img src="../../images/profile.jpeg" alt="" />
        </div>
      
       <div className="info">
        <h2 className="name">Maina Ngugi</h2>
        <h3 className="spec">Web Developer</h3>
       </div>
       <hr />
       <div className="links">
        <Link  to="/">Home</Link>
        <Link  to="/about">About</Link>
        {/* <Link  to="/skills">Skills</Link>
        <Link  to="/education">Education</Link> */}
        <Link  to="/projects">Projects</Link>
        <Link  to="/blog">Blog</Link>
        <Link  to="/contact">Contact</Link>
        </div>
        <hr />
    
    </div>
    
      <div className="footer">
        <Footer/>
      </div>
          </>
  )
}

export default Navbar