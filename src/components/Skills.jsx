import React from 'react'
import { Link } from 'react-router-dom'

const Skills = () => {
  return (
    <div className='skills-page'>
      <div className='text-zone'>
        <h1><span className='titleSkills'>Habilidades y</span> <br /> <span className='titleSkills'>experiencia</span></h1>
        <p className='textSkills'>
          Desde que empecé mi viaje como desarrollador me enamore de esta profesión, siendo sincero ha sido un gran reto para mi.
          <br />
          Soy un apasionado a la tecnología y estoy desarrollando sitios web receptivos, fáciles de usar construidos con las mejores practicas. Estoy ganando experiencia en el desarrollo front end con HTML, CSS, JS con el uso de la librería de ReactJS, creando pequeñas aplicaciones personalizadas, funciones, animaciones y diseños interactivos.
          <br />
          Si estas interesado en mi trabajo puedes visitar mi perfil de <a className='linkText' href='https://www.linkedin.com/in/juan-sebastian-giraldo-varon-b36689222/' target='_blank'>Linkedin</a> o simplemente <Link className='linkText' to='/contact'>contactame</Link>.
        </p>
      </div>

      <div className='skills-details'>
        <div>
          <div>
            <p className='textSkillsDetail'>Front-End</p>
            <div className='contourBars'>
              <span className='barRed'></span>
            </div>
          </div>

          <div>
            <p className='textSkillsDetail'>HTML</p>
            <div className='contourBars'>
              <span className='barBlue'></span>
            </div>
          </div>

          <div>
            <p className='textSkillsDetail'>CSS</p>
            <div className='contourBars'>
              <span className='barPurple'></span>
            </div>
          </div>

          <div>
            <p className='textSkillsDetail'>JavaScript</p>
            <div className='contourBars'>
              <span className='barYellow'></span>
            </div>
          </div>

          <div>
            <p className='textSkillsDetail'>React-JS</p>
            <div className='contourBars'>
              <span className='barblue2'></span>
            </div>
          </div>

        </div>

        <h1 className='textSkillsDetail' >Certificaciones</h1>
        <div className='certifications'>
          <div className='cardCerti'>
            <h3 className='textSkillsDetail'>Academia Geek</h3>
            <p className='textCard'>Desarrollador Front-end</p>
            <p className='textCard'>Diciembre 2021-Marzo 2022</p>
          </div>

          <div className='cardCerti'>
            <a  href='https://www.freecodecamp.org/certification/Cattho/front-end-development-libraries' target='_blank'><h3 className='textSkillsDetail'>Front End Development Libraries</h3></a>
            <p className='textCard'>Febrero 2022</p>
          </div>

          <div className='cardCerti'>
            <a href='https://www.freecodecamp.org/certification/Cattho/javascript-algorithms-and-data-structures' target='_blank'><h3 className='textSkillsDetail'>JavaScript Algorithms and Data Structures</h3></a>
            <p className='textCard'>Febrero 2022</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Skills