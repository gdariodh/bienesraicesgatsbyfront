import React, { useState, useEffect } from "react"
// emotion
import { css } from "@emotion/core"
// custom hook
import usePropiedades from "../hooks/usePropiedades"
import useFiltro from "../hooks/useFiltro"
// Preview Component
import PropiedadPreview from "./PropiedadPreview"
// module
import listadoPropiedadesCSS from "../css/listado-propiedades.module.css"

const ListadoPropiedades = () => {
  // consulta graphql - custom hook
  const resultado = usePropiedades()
  // Filtrar el listado de propiedades
  // 1. encapsulamos la consulta
  const [propiedades] = useState(resultado)
  // 2. creamos a un segundo state que guardara el filtrado
  const [filtrado, setFiltrado] = useState([])
  // filtrado mediante custom hook - implementamos categoria al useEffect para que cuando cambie su valor vuelva hacer render el componente
  const { FiltroUI, categoria } = useFiltro()
  // 4. useEffect para cuando se eliga o no la categoria :D
  useEffect(() => {
    if (categoria) {
      // si eligen una categorias, filtramos :D
      const filtro = propiedades.filter(
        propiedad => propiedad.categorias.nombre === categoria
      )
      setFiltrado(filtro)
    } else {
      // si hay eligen categoria, regresa el listado normal!
      setFiltrado(propiedades)
    }
  }, [categoria,propiedades])

  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras propiedades
      </h2>
      {FiltroUI()}
      <ul className={listadoPropiedadesCSS.propiedades}>
        {filtrado.map(propiedad => (
          <PropiedadPreview key={propiedad.id} propiedad={propiedad} />
        ))}
      </ul>
    </>
  )
}

export default ListadoPropiedades
