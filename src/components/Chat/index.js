import React from "react";
import ChatHeader from '../ChatHeader/index';
import * as C from './styles';
import ChatFooter from '../ChatFooter/index';
import ChatBody from "../ChatBody/index";
import Default from "../Default";

function Chat({ userChat }) {

  if(!userChat) return <Default />;

  return (
    <C.Container>
      <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
      <ChatBody chatId={userChat?.chatId} />
      <ChatFooter chatId={userChat?.chatId} />
    </C.Container>
  );
}

export default Chat;