// template de paginas dinamicas de propiedades!
import React from "react"
import { graphql } from "gatsby"
//components
import Layout from "../components/Layout"
import Iconos from "./Iconos"
import Image from "gatsby-image"
// emotion
import styled from "@emotion/styled"
import {css} from "@emotion/core"

// consulta graphql
export const query = graphql`
  query($id: String!) {
    propiedad: allStrapiPropiedades(filter: { id: { eq: $id } }) {
      nodes {
        nombre
        estacionamiento
        descripcion
        wc
        habitaciones
        precio
        agentes {
          nombre
          telefono
          email
          imagen {
            sharp: childImageSharp {
              fluid(maxWidth: 100, maxHeight: 100, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        imagen {
          sharp: childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

// styles

const Contenido = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`

const Sidebar = styled.aside`
 padding:1.5rem;
 max-height: 42rem;
  .precio {
    font-size: 4rem;
    color: #75ab00;
  }
  .agente {
    margin-top: 2rem;
    border-radius: 2rem;
    border: 1px solid #e1e1e1;
    box-shadow: 1px 1px 3px 1px #f1f3f5;
    padding: 2rem;
    background-color: #fff;
    font-family: "Roboto", sans-serif;
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 3rem;
  }
  p {
    margin: 0;
  }
`

const ImageAgente = styled(Image)`
  max-height: 150px;
  max-width: 100px;
  border-radius: 100px;
  border: 2px solid #e1e1e1;
`

// extraemos de la consulta graphql
const Propiedades = ({
  data: {
    propiedad: { nodes },
  },
}) => {
  // extraemos los valores de la consulta
  const {
    nombre,
    descripcion,
    estacionamiento,
    wc,
    precio,
    habitaciones,
    agentes,
    imagen: {
      sharp: { fluid },
    },
  } = nodes[0]
  console.log(agentes)

  return (
    <Layout>
      <h1>{nombre}</h1>
      <Contenido>
        <main>
          <Image css={css`
           max-height: 600px;
          `} fluid={fluid} />
          <p css={css`text-align:justify`}>{descripcion}</p>
        </main>
        <Sidebar>
          <p className="precio">$ {precio}</p>
          <Iconos
            estacionamiento={estacionamiento}
            wc={wc}
            habitaciones={habitaciones}
          />
          <div>
            <h2 css={css`margin-top:2rem; text-align:left`}>Vendedor:</h2>

            <div className="agente">
              {agentes.imagen && (
                <ImageAgente fluid={agentes.imagen.sharp.fluid} />
              )}
              <div>
                <p>Nombre: {agentes.nombre}</p>
                <p>Telefono: {agentes.telefono}</p>
                <p>Email: {agentes.email}</p>
              </div>
            </div>
          </div>
        </Sidebar>
      </Contenido>
    </Layout>
  )
}

export default Propiedades
