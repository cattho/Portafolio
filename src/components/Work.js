import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

const Work = () => {
    return (
        <div className='skills-page'>
            <CardGroup className='cardsContainer'>

                <Card>
                    <Card.Img className='cardImg' src="https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg" />
                    <Card.Body>
                        <Card.Title><h3>Pokedex</h3></Card.Title>
                        <Card.Text>
                            Aplicación creada con ReactJS consumiendo la API de Pokemon, implementacion de Redux con sistema de proteccion de rutas, inicio de sesion con firebase para google, facebook y autenticacion de correo electronico.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img className='cardImg' variant="top" src="https://res.cloudinary.com/dfp8qduho/image/upload/v1645226601/imagen_2022-02-18_182319_nggyga.png" />
                    <Card.Body>
                        <Card.Title><h3>Aplicación de Peliculas</h3></Card.Title>
                        <Card.Text>
                        Aplicación creada con ReactJS consumiendo la API de TheMovieDB, implementacion de Redux con sistema de proteccion de rutas, inicio de sesion con firebase para google, facebook y autenticacion de correo electronico.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img className='cardImg' variant="top" src="https://res.cloudinary.com/dfp8qduho/image/upload/v1650552603/gokbrjsywkg0lzjpqj1c.png" />
                    <Card.Body>
                        <Card.Title><h3>La tiendita</h3></Card.Title>
                        <Card.Text>
                            Pequeño E-commerce creado con HTML, CSS y JavaScript, como preambulo para ReactJS.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            {/* <p>Puedes ver mas de mi trabajo en mi <a>GitHub</a></p> */}
        </div>
    )
}

export default Work
