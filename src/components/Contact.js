import React from 'react'

const Contact = () => {

  const handleSubmit= (e) =>{
    e.preventDefault()
  }

  return (
    <div className='contact-page'>
      <div className='formContainer'>
        <h1 className='contacTitle'>
          <span className='jump titleSkills ml'>C</span>
          <span className='jump titleSkills'>o</span>
          <span className='jump titleSkills'>n</span>
          <span className='jump titleSkills'>t</span>
          <span className='jump titleSkills'>a</span>
          <span className='jump titleSkills'>c</span>
          <span className='jump titleSkills'>t</span>
          <span className='jump titleSkills'>a</span>
          <span className='jump titleSkills'>m</span>
          <span className='jump titleSkills spaceCap'>e</span>
          <span className='jump titleSkills'>!</span>
        </h1>



        <form onSubmit={handleSubmit}>
          <p className='textSkills ml'>Estoy interesado en oportunidades para conseguir mi primer empleo. Sin embargo si tienes otra petición o pregunta, no dudes en hacermelo saber!</p>
          <div className='NameEmail'>
            <input className='inputContact midIn' placeholder='Nombre' type='text' />
            <input className='inputContact midIn' placeholder='Email' type='email' />
          </div>
          <input className='inputContact' type='text' placeholder='Asunto' />
          <textarea className='inputContact' type='text' placeholder='Mensaje' />
          <button type='submit' className='contactButton'>Enviar Mensaje!</button>
        </form>
      </div>

      <div className='mapContainer'>
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15911.337903381313!2d-75.21289915!3d4.4418912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1648437065651!5m2!1ses!2sco" loading="lazy" />
      </div>
    </div>
  )
}

export default Contact