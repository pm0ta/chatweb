import React from "react";
import * as C from './styles';
import { MdMessage } from 'react-icons/md';

function Default() {
  return (
    <C.Container>
      <MdMessage />
      <C.Title> Chat App </C.Title>
      <C.Info>
        by: Will Dev 
      </C.Info>
    </C.Container>
  );
}

export default Default;