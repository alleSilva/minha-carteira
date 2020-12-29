import styled from 'styled-components'

export const Container = styled.div`
	grid-area: AS;
  color: ${props => props.theme.colors.white};
	background-color: ${props => props.theme.colors.secundary};
  border-right: 2px solid ${props => props.theme.colors.grey};
`
export const Header = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 5px;
`;

export const ImgLogo = styled.img`
  width: 40px;
  height: 40px;
`;

export const Title = styled.h3`
  color: ${props=>props.theme.colors.white};
  margin-left: 5px;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

export const MenuItemLink = styled.a`
  color: ${props=>props.theme.colors.info};
  margin: 5px 0;
  text-decoration: none;
`;
