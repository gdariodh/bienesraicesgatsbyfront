import React from "react"
// components
import Iconos from "./Iconos"
import Image from "gatsby-image"
// emotion
import styled from "@emotion/styled"
// ROUTING
import { Link } from "gatsby"
import urlSlug from 'url-slug'

const Boton = styled(Link)`
   margin-top:2rem;
   padding:1rem;
   background-color:#75ab00;
   width: 100%;
   color: #fff;
   display:block;
   text-decoration:none;
   text-align: center;
   font-weight: 700;
   text-transform:uppercase;
`

const Card = styled.div`
  border: 1px solid #e1e1e1;
  img {
    max-width: 100%;
    max-height: 400px;
  }
  h3{
    @media(min-width:400px){
      min-height: 120px;
    }
    @media(min-width:768px){
      min-height: 75px;
    }
   
  }
  overflow: hidden;
`

const Contenido = styled.div`
  padding: 2rem;

  h3 {
    font-family: "Lato", sans-serif;
    margin: 0 0 2rem 0;
    font-size: 2.4rem;
  }

  .precio {
    font-size: 2rem;
    color: #75ab00;
  }
`

// prop proviene de listadopropiedades.js
const PropiedadPreview = ({ propiedad }) => {
  const {
    nombre,
    wc,
    estacionamiento,
    precio,
    habitaciones,
    imagen: {
      sharp: { fluid },
    },
  } = propiedad

  return (
    <Card>
      <Image fluid={fluid} fadeIn="soft" />
      <Contenido>
        <h3>{nombre}</h3>
        <p className="precio">$ {precio}</p>
        <Iconos
          estacionamiento={estacionamiento}
          wc={wc}
          habitaciones={habitaciones}
        />

        <Boton to={`/${urlSlug(nombre)}`}>Visitar</Boton>
      </Contenido>
    </Card>
  )
}

export default PropiedadPreview
