import React, { useState } from "react";
import * as C from './styles';
import { MdSend } from 'react-icons/md';
import { auth, db } from '../../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from "firebase/compat/app";

function ChatFooter({ chatId }) {

  const [user] = useAuthState(auth);
  const [message, setMessage] = useState('');

  function handleSendMessage(e) {
    e.preventDefault();

    db.collection('chats').doc(chatId).collection('messages').add({
      message: message,
      user: user.email,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessage('')
  }

  return (
    <C.Container>
      <C.Form onSubmit={handleSendMessage}>
        <C.input 
        placeholder="Digite uma mensagem..."
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        />
        <MdSend onClick={handleSendMessage} />
      </C.Form>
    </C.Container>
  );
}

export default ChatFooter;