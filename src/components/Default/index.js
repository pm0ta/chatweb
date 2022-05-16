import React from "react";
import * as C from './styles';
import { MdMessage } from 'react-icons/md';

function Default() {
  return (
    <C.Container>
      <MdMessage />
      <C.Title> Web Chat </C.Title>
      <C.Info>
        Equipe: <b> Pedro Mota, Eric Freitas e Samuel. </b>
        <br/> <br/>
        Créditos: <b> Will Dev </b>
      </C.Info>
    </C.Container>
  );
}

export default Default;
