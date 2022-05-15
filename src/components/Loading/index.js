import React from "react";
import { Circle } from 'better-react-spinkit';
import * as C from './styles';

function Loading() {
  return (
    <C.Container>
      <Circle />
    </C.Container>
  );
}

export default Loading;