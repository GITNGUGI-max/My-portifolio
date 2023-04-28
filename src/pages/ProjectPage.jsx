import React from 'react'

const ProjectPage = () => {
  return (
    <div className='projects'>
      <h1 className="projects-header">My Projects</h1>
      <div className="projects-body">
        <ul className="project-list">
          <li><a href="https://637beebe0f55132de535cad5--bright-nasturtium-a23449.netlify.app/">Shopping Cart using React and @reduxtoolkit - <span id='btn'>View<span/></span></a></li>
          <li> <a href="https://react-todoapp-26ho.vercel.app/">To do app using React - <span id='btn'>View<span/></span></a></li>
          <li><a href="https://effervescent-medovik-459b4b.netlify.app/">Ecommerce Frontend Design in React - <span id='btn'>View<span/></span></a></li>
          <li> <a href="https://serene-engelbart-363e84.netlify.app/virtualkeyboard/main.html">Virtual Keyboard in Javascript - <span id='btn'>View<span/></span></a></li>
          <li><a href="https://serene-engelbart-363e84.netlify.app/car%20animation/move">Moving car animation using Html and CSS - <span id='btn'>View<span/></span></a></li>
          <li> <a href="https://github.com/GITNGUGI-max/">Other projects on my Github account - <span id='btn'>View<span/></span></a></li>
        </ul>
      </div>
  
    </div>
  )
}

export default ProjectPage