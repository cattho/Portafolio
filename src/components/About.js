import React from 'react'
import { Link } from 'react-router-dom'
import Sphere from './Sphere'

const About = () => { 
  

  return (
    <div className='skills-page'>
      <div className='text-zone'>
        <h1>
          <span className='jump titleSkills'>¿</span>
          <span className='jump titleSkills'>Q</span>
          <span className='jump titleSkills'>u</span>
          <span className='jump titleSkills'>i</span>
          <span className='jump titleSkills'>e</span>
          <span className='jump titleSkills spaceCap'>n</span>
          <span className='jump titleSkills'>S</span>
          <span className='jump titleSkills'>o</span>
          <span className='jump titleSkills'>y</span>
          <span className='jump titleSkills'>?</span>
        </h1>
        <p className='textSkills'>Soy un desarrollador web ubicado en la ciudad de Ibagué, Colombia. Aunque estoy iniciando mi carrera tengo una gran pasion por toda la parte de creacion Front end, para brindar al usuario aplicaciones intuitivas y dinamicas.</p>

        <p className='textSkills'>Soy una persona organizada y disciplinada; puedo solucionar problemas y soy atento a los detalles. Me gustan los video juegos, sobre todo el WOW, las actividades en el gimnasio es mi otra gran pasión. </p>

        <p className='textSkills'>Estoy interesado en todo tipo de proyectos fron tend con ReactJs, para trabajar junto a grandes personas</p>

        <Link to='/contact'><p className='linkText'>¿Tienes algo en mente?</p></Link>
      </div>

      <div className='animationAbout'>
        <Sphere/>
      </div>
    </div>
  )
}

export default About