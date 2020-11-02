import { graphql, useStaticQuery } from "gatsby"

const usePropiedades = () => {
  const {
    propiedades: { nodes },
  } = useStaticQuery(graphql`
    {
      propiedades: allStrapiPropiedades {
        nodes {
          nombre
          descripcion
          estacionamiento
          habitaciones
          id
          wc
          precio
          categorias {
            nombre
          }
          imagen {
            sharp: childImageSharp {
              fluid(quality: 100, maxWidth: 600, maxHeight: 400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  // .map porque son varias posiciones:) - posicion es nodes[0] por ejemplo

  return nodes.map(propiedad => ({
      nombre: propiedad.nombre,
      descripcion: propiedad.descripcion,
      estacionamiento: propiedad.estacionamiento,
      habitaciones: propiedad.habitaciones,
      id: propiedad.id,
      wc: propiedad.wc,
      precio: propiedad.precio,
      agentes:propiedad.agentes,
      categorias: propiedad.categorias,
      imagen: propiedad.imagen
  }))
}

export default usePropiedades
