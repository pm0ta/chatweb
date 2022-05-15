import React from "react";
import * as C from './styles';
import { MdMessage } from 'react-icons/md';

function Default() {
  return (
    <C.Container>
      <MdMessage />
      <C.Title> Web Chat </C.Title>
      <C.Info>
        Equipe: Pedro Mota, Eric Freitas e Samuel.
        <br/> <br/>
        Créditos: Will Dev
      </C.Info>
    </C.Container>
  );
}

export default Default;
