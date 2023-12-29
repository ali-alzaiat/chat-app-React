import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [receiver, setReceiver] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [messageContent, setMessageContent] = useState('');
  const [hide, setHide] = useState(false);

  return (
    <UserContext.Provider value={{ username, setUsername, receiver ,setReceiver ,email ,setEmail ,messageContent ,setMessageContent ,receiverName ,setReceiverName ,hide ,setHide}}>
      {children}
    </UserContext.Provider>
  );
};