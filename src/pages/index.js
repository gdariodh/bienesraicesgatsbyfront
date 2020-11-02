import React from "react"
//components
import Layout from "../components/Layout"
import Image from "gatsby-background-image"
import Encuentra from "../components/Encuentra"
import ListadoPropiedades from "../components/ListadoPropiedades"
// hook
import useInicio from "../hooks/useInicio"
// emotion
import { css } from "@emotion/core"
import styled from "@emotion/styled"
// css module
import heroCSS from '../css/hero.module.css'

const BackgroundImage = styled(Image)`
  height: 600px;
`

const Index = () => {

  // consulta graphql en custom hook
  const inicio = useInicio();

  const {
    nombre,
    contenido,
    imagen: {
      sharp: { fluid },
    },
  } = inicio

  return (
    <Layout>
      {/**Para mostrarse el fondo es obligatorio poner un size, */}
      {/**Texto con fondo gatsby */}
      <BackgroundImage tag="section" fluid={fluid} fadeIn="soft">
        {/* Aca usamos cssmodule, primero ponemos el objeto y despues la clase, el objeto es heroCSS */}
        <div className={heroCSS.imagenbg}>
          <h1 className={heroCSS.titulo}>Venta de casas y departamentos exclusivos</h1>
        </div>
      </BackgroundImage>
      {/**Contenido*/}
      <main>
        <div
          css={css`
            max-width: 800px;
            margin: 0 auto;
          `}
        >
          <h1>{nombre}</h1>
          <p
            css={css`
              text-align: center;
            `}
          >
            {contenido}
          </p>
        </div>
      </main>

      <Encuentra/>

      <ListadoPropiedades/>

    </Layout>
  )
}

export default Index
