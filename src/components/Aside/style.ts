import styled from 'styled-components'

export const Container = styled.div`
	grid-area: AS;
  color: ${props => props.theme.colors.white};
	background-color: ${props => props.theme.colors.secundary};
  border-right: 2px solid ${props => props.theme.colors.grey};
`;
