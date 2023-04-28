import React from 'react'

const AboutPage = () => {
  return (
    <div className='about'>
     <div className="icons">
     <img className='react' src="../../images/react.png" alt="" /> 
     <span className='plus'>+</span>
     <img className='django' src="../../images/python.png" alt="" />
     </div>
     <div className="details">
      <h1 className="welcome">Welcome, Hey I am Maina Ngugi and I build things for the Web.</h1>
      <p className="introduction"> I am highly motivated Junior Web Developer with experience in building web applications. Proficient in HTML, CSS, JavaScript, and React with expertise in MVC framework like Django and Django RestFramework and relational databases such as MYSQL, SQL, and PostgresQL. Seeking to join a dynamic team where I can utilize my skills to help drive the success of the organization.</p>
      </div>
    </div>
  )
}

export default AboutPage