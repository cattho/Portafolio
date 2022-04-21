import React from 'react'
import { useDispatch } from 'react-redux';
import { sendDataAsync } from '../actions/userAction';
import { useForm } from '../hooks/useForm'

const Contact = () => {

  const dispatch = useDispatch()
  const [data, handleInputChange] = useForm({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const { nombre, email, asunto, mensaje } = data;

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(sendDataAsync(nombre,email,asunto,mensaje))
  };

 
  

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
          <p className='textSkills ml'>Estoy interesado en oportunidades para conseguir mi primer empleo. Sin embargo si tienes otra petición o pregunta, no dudes en hacérmelo saber!</p>
          <div className='NameEmail'>
            <input className='inputContact midIn' placeholder='Nombre' type='text' name='nombre' value={nombre} onChange={handleInputChange} />
            <input className='inputContact midIn' placeholder='Email' type='email' name='email' value={email} onChange={handleInputChange} />
          </div>
          <input className='inputContact' type='text' placeholder='Asunto' name='asunto' value={asunto} onChange={handleInputChange} />
          <textarea className='inputContact' type='text' placeholder='Mensaje' name='mensaje' value={mensaje} onChange={handleInputChange} />
          <button type='submit' className='contactButton'>Enviar Mensaje!</button>
        </form>
      </div>

      <div className='mapContainer'>
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15911.365769482707!2d-75.22902205119568!3d4.440599271119495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38c4edeeb6c2c3%3A0xa88c4b7af97bed1!2sCl.%2031a%20%237b-6%2C%20Ibagu%C3%A9%2C%20Tolima!5e0!3m2!1ses!2sco!4v1650288949040!5m2!1ses!2sco" loading="lazy" />
      </div>
    </div>
  )
}

export default Contact