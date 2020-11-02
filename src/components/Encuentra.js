import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// component
import BackgroundImage from "gatsby-background-image"
// emotion
import styled from "@emotion/styled"
// cssmodule
import heroCSS from '../css/hero.module.css'

const ImageBackground = styled(BackgroundImage)`
  height: 300px;
`

const Encuentra = () => {
  const {
    banner: {
      sharp: { fluid },
    },
  } = useStaticQuery(graphql`
    {
      banner: file(relativePath: { eq: "encuentra.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <ImageBackground tag="section" fluid={fluid} fadeIn="soft">
      <div className={heroCSS.imagenbg}>
        <h3 className={heroCSS.titulo}>Encuentra la casa de tus sueños</h3>
        <p>15 años de experiencia</p>
      </div>
    </ImageBackground>
  )
}

export default Encuentra
