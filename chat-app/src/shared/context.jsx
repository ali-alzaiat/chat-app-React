import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [receiver, setReceiver] = useState('');

  return (
    <UserContext.Provider value={{ username, setUsername, receiver ,setReceiver ,email ,setEmail}}>
      {children}
    </UserContext.Provider>
  );
};