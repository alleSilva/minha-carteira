import React from 'react';
import Switch from 'react-switch';
import {Container, ToggleLabel} from './style';
const Toggle: React.FC = () => (
  <Container>
    <ToggleLabel>Dark</ToggleLabel>
    <Switch 
      checked
      checkedIcon={false}
      uncheckedIcon={false}
      onChange={()=>{}}
    />
    <ToggleLabel>Light</ToggleLabel>
  </Container>
);

export default Toggle;
