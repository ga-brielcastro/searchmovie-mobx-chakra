import React from "react";
import {observer} from 'mobx-react-lite'
import { Container, Text } from './styles';

const Header: React.FC = ({children}) =>{
  return (
    <Container>
      <Text>MoviesX</Text>
      {children}
    </Container>
  );
}

export default observer(Header) 