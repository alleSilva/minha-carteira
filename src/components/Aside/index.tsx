import React from 'react';
import {Container,
        Header,
        ImgLogo,
        Title,
        MenuContainer,
        MenuItemLink
        
        } from './style';
import imgLogo from '../../assets/logo.svg';
const Aside: React.FC = ()=> {
	return (
		<>
			<Container>
        <Header>
          <ImgLogo src={imgLogo} alt="Logo"/>
          <Title>Minha Carteira</Title>
        </Header>
        <MenuContainer>
          <MenuItemLink href="#">
            Dashboard
          </MenuItemLink>
          <MenuItemLink href="#">
            Entradas                                                 </MenuItemLink>
          <MenuItemLink href="#">
            Saidas                                                   </MenuItemLink>
          <MenuItemLink href="#">
            Sair                                                     </MenuItemLink>
        
        </MenuContainer >
			</Container>	
		</>
	);
}

export default Aside;
