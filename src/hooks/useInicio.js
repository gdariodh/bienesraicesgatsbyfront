import { useStaticQuery, graphql } from "gatsby"

const useInicio = () => {
  // forma de hacer consulta graphql mediante un custom-hook

  const {
    inicio: { nodes },
  } = useStaticQuery(graphql`
    {
      inicio: allStrapiPaginas(filter: { nombre: { eq: "Inicio" } }) {
        nodes {
          nombre
          contenido
          imagen {
            sharp: childImageSharp {
              fluid(
                quality: 100
                maxWidth: 1920
                duotone: {
                  highlight: "#222222"
                  shadow: "#192550"
                  opacity: 50
                }
                toFormat: PNG
              ) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return nodes[0]
}

export default useInicio
