import React from 'react';

import {Container, 
        ToggleLabel, 
        ToggleSelector} from './style';

const Toggle: React.FC = () => (
  <Container>
    <ToggleLabel>Dark</ToggleLabel>
    <ToggleSelector 
      checked
      checkedIcon={false}
      uncheckedIcon={false}
      onChange={()=>{}}
    />
    <ToggleLabel>Light</ToggleLabel>
  </Container>
);

export default Toggle;
