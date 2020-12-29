import React, {useMemo} from 'react';
import {Container, Profile, Welcome, Username} from './style';
import emojis from '../../utils/emojis';
import indexRandom from '../../utils/indexRandom';
import Toggle from '../Toggle';

const MainHeader: React.FC = ()=> {
  const emoji = useMemo(()=>{
    const index = indexRandom(emojis);
    return emojis[index];
  },[]);
  return (
    <>
      <Container>
        <Toggle/>
        <Profile>
          <Welcome>Hello, {emoji}</Welcome>
          <Username>Alesandro</Username>
        </Profile>
  </Container>
</>
	);
}

export default MainHeader;
