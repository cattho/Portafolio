import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

const Work = () => {
    return (
        <div className='skills-page'>
            <CardGroup className='cardsContainer'>

                <Card>
                    <Card.Img className='cardImg' src="https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg" />
                    <Card.Body>
                        <Card.Title><h3><a href='https://vocal-begonia-d38df3.netlify.app' target='_blank'>Pokédex</a></h3></Card.Title>
                        <Card.Text>
                            Aplicación creada con ReactJS consumiendo la API de Pokemon, implementacion de Redux con sistema de proteccion de rutas, inicio de sesion con firebase para google, facebook y autenticacion de correo electronico.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img className='cardImg' variant="top" src="https://res.cloudinary.com/dfp8qduho/image/upload/v1645226601/imagen_2022-02-18_182319_nggyga.png" />
                    <Card.Body>
                        <Card.Title><h3><a href='https://block-master-sebas.netlify.app' target="_blank">Block Master- Aplicación de peliculas</a></h3></Card.Title>
                        <Card.Text>
                        Aplicación creada con ReactJS consumiendo la API de TheMovieDB, implementacion de Redux con sistema de proteccion de rutas, inicio de sesion con firebase para google, facebook y autenticacion de correo electronico.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img className='cardImg' variant="top" src="https://res.cloudinary.com/dfp8qduho/image/upload/v1650552603/gokbrjsywkg0lzjpqj1c.png" />
                    <Card.Body>
                        <Card.Title><h3><a href='https://cattho.github.io/LaTiendita/' target='_blank'>La tiendita</a></h3></Card.Title>
                        <Card.Text>
                            Pequeño E-commerce creado con HTML, CSS y JavaScript, como preambulo para ReactJS.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            <p className='textSkills'>Puedes ver mas de mi trabajo en mi <a href='https://github.com/cattho' target='_blank' className='linkText'>GitHub</a></p>
        </div>
    )
}

export default Work
