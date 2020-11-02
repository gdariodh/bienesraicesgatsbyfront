import React from 'react';
import {Link} from 'gatsby'
// emotion
import styled from '@emotion/styled';
 
const Navigate = styled.nav`
    display:flex;
    flex-direction: column;
    padding-bottom:3rem;

    @media (min-width:768px){
        padding:0;
        flex-direction:row;
    }

    @media(max-width:768px){
      font-size:2rem;
    }
`;

const LinkNav = styled(Link)`
  color:#fff;
  text-decoration:none;
  font-weight:700;
  font-family:'Roboto', sans serif;
  padding:.5rem;
  margin-right:1rem;

  &:last-of-type{
      margin-right:0;
  }

  &.actual-page{
    border-bottom: 0px;

    @media(min-width:768){
      border-bottom:2px solid #fff;
    }
    
  }

`;

const Navegacion = () => {
    return ( 
       <Navigate>
           <LinkNav to={'/'} activeClassName='actual-page'>Inicio</LinkNav>
           <LinkNav to={'/nosotros'} activeClassName='actual-page'>Nosotros</LinkNav>
           <LinkNav to={'/propiedades'} activeClassName='actual-page'>Propiedades</LinkNav>
       </Navigate>
     );
}
 
export default Navegacion;