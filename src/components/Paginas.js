// template de paginas dinamicas de propiedades!
import React from "react"
import { graphql } from "gatsby"
//components
import Layout from "../components/Layout"
import Image from "gatsby-image"
import ListadoPropiedades from "../components/ListadoPropiedades"
// emotion
import styled from "@emotion/styled"
import { css } from "@emotion/core"

// consulta graphql
export const query = graphql`
  query($id: String!) {
    allStrapiPaginas(filter: { id: { eq: $id } }) {
      nodes {
        nombre
        contenido
        imagen {
          childImageSharp {
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
const ContenidoPagina = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`

// extraemos de la consulta graphql
const Paginas = ({
  data: {
    allStrapiPaginas: { nodes },
  },
}) => {
  // extraemos los valores de la consulta
  const {
    nombre,
    contenido,
    imagen: {
      childImageSharp: { fluid },
    },
  } = nodes[0]

  return (
    <Layout>
    {nombre === 'Nosotros' && <h1>{nombre}</h1> }  
      <main className="contenedor">
        {nombre === "Propiedades" ? (
          <ListadoPropiedades />
        ) : (
          <ContenidoPagina>
            <Image
              css={css`
                max-height: 600px;
              `}
              fluid={fluid}
            />
            <p
              css={css`
                text-align: justify;
              `}
            >
              {contenido}
            </p>
          </ContenidoPagina>
        )}
      </main>
    </Layout>
  )
}

export default Paginas
