import React from "react";
import * as C from './styles';
import { MdChat } from 'react-icons/md';
import * as EmailValidator from 'email-validator';
import { auth, db } from '../../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

function SidebarHeader({ setuserChat }) {

  const [user] = useAuthState(auth);
  const refChat = db
  .collection('chats')
  .where('users', 'array-contains', user.email);
  const [chatsSnapshot] = useCollection(refChat);
  
  //criar novo chat
  function handleCreatechat() {
    const emailInput  = prompt('Escreva o e-mail desejado: ');

    if(!emailInput) return;

    if(!EmailValidator.validate(emailInput)) {
      return alert('E-mail inválido!');
    } else if(emailInput === user.email) {
      return alert('Você precisa inserir um email diferente do seu!');
    } else if(chatExists(emailInput)) {
      return alert('Já existe um chat!');
    }

    db.collection('chats').add({
      users: [user.email, emailInput],
    });
  };

  const chatExists = (emailChat) => {
    return !!chatsSnapshot?.docs.find(
      (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
    );
  };

  return (
    <C.Container>
      <C.Avatar 
      src={user?.photoURL}  
      onClick={() => [auth.signOut(), setuserChat(null)]}
      />
      <C.Options>
        <MdChat onClick={handleCreatechat} />
      </C.Options>
    </C.Container>
  )
}

export default SidebarHeader;
