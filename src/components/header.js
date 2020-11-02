import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
// components
import Navegacion from "../components/Navegacion"
// emotion
import { css } from "@emotion/core"

const Header = () => {
  // consulta graphql
  const {
    logo: { publicURL },
  } = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <header
      css={css`
        background-color: #0d283b;
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 120rem;
          margin: 0 auto;
          text-align: center;

          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <Link to={"/"}>
            <img src={publicURL} alt='Logo Bienes Raices'/>
        </Link>

        <Navegacion />
      </div>
    </header>
  )
}

export default Header
