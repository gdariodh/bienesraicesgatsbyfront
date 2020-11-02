// gatsby-node sirve para crear paginas dinamicas! - gatsby-node es codigo nodejs!

const urlSlug = require("url-slug")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
  {
    allStrapiPaginas {
      nodes {
        nombre
        id
      }
    }
    allStrapiPropiedades {
      nodes {
        nombre
        id
      }
    }
  }
  
  `)

  // si no hay resultados
  if (resultado.errors) {
    reporter.panic("No hubo resultados", resultado.errors)
  }

  // si hay resultados - generar los archivos estaticos
  const propiedades = resultado.data.allStrapiPropiedades.nodes
  const paginas = resultado.data.allStrapiPaginas.nodes

  // crear los templates
  propiedades.forEach(propiedad => {
    actions.createPage({
      path: urlSlug(propiedad.nombre),
      component: require.resolve("./src/components/Propiedades.js"),
      context: {
        id: propiedad.id,
      },
    });
  });

  paginas.forEach(pagina => {
    actions.createPage({
      path: urlSlug(pagina.nombre),
      component: require.resolve("./src/components/Paginas.js"),
      context: {
        id: pagina.id,
      },
    });
  });

}
