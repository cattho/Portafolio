import React from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { sendDataAsync } from '../actions/userAction';
import { useForm } from '../hooks/useForm'

const Contact = () => {

  const dispatch = useDispatch()
  const [data, handleInputChange, reset] = useForm({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const { nombre, email, asunto, mensaje } = data;

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(sendDataAsync(nombre, email, asunto, mensaje))
    reset()
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
            <input className='inputContact midIn' placeholder='Nombre' type='text' name='nombre' value={nombre} onChange={handleInputChange} required />
            <input className='inputContact midIn' placeholder='Email' type='email' name='email' value={email} onChange={handleInputChange} required />
          </div>
          <input className='inputContact' type='text' placeholder='Asunto' name='asunto' value={asunto} onChange={handleInputChange} required />
          <textarea className='inputContact' type='text' placeholder='Mensaje' name='mensaje' value={mensaje} onChange={handleInputChange} required />
          <div className='buttonContainer'>
            <button type='submit' className='contactButton' onClick={() => Swal.fire({
              background: '#1d1d1d',
              color: '#8c9096',
              position: 'center',
              icon: 'success',
              title: 'Gracias por contactarme, pronto me pondre en contacto contigo',
              showConfirmButton: true,
              timer: 3500
            })}>Enviar Mensaje!</button>
          </div>
        </form>
      </div>

      <div className='mapContainer'>
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127295.79546459236!2d-75.25681815558085!3d4.412286216249967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38c491115f4d5f%3A0xe0cae43859d2401e!2zSWJhZ3XDqSwgVG9saW1h!5e0!3m2!1ses-419!2sco!4v1650742161637!5m2!1ses-419!2sco" loading="lazy" />
      </div>
    </div>
  )
}

export default Contact