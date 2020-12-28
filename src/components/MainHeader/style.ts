import styled from 'styled-components'

export const Container = styled.div`
	grid-area: MH;
	background-color: ${props => props.theme.colors.secundary};
  border-bottom: 2px solid ${props=>props.theme.colors.grey};
  };
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export const Profile = styled.div`
`;

export const Welcome = styled.h3`
  
`;

export const Username = styled.span`

`;

