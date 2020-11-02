import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

const Formulario = styled.form`
  width: 100%;
  display: flex;
  border: 1px solid #e1e1e1;
  max-width: 1200px;
  margin: 2rem auto 0 auto;
`

const Select = styled.select`
  flex: 1;
  padding: 1rem;
  appearance: none;
  border: none;
  font-family: "Lato", sans-serif;
`

const useFiltro = () => {
  // consulta
  const {
    allStrapiCategorias: { nodes },
  } = useStaticQuery(graphql`
    {
      allStrapiCategorias {
        nodes {
          id
          nombre
        }
      }
    }
  `)
  // encapsulamos la consulta
  const categorias = nodes

  // state que encapsula la seleccion de una categoria
  const [categoria, setCategoria] = useState("")

  console.log(categoria)

  // return de react con rowfunction
  const FiltroUI = () => (
    <Formulario>
      <Select onChange={e => setCategoria(e.target.value)} value={categoria}>
        <option value="">--Filtrar--</option>
        {categorias.map((opcion, i) => (
          <option key={`${opcion.id}-${i}`} value={opcion.nombre}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </Formulario>
  )

  return {
    categoria,
    FiltroUI,
  }
}

export default useFiltro
