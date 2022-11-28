import { useEffect } from 'react';
import {io} from 'socket.io-client';
import Header from '../../components/header';
import Message from '../../components/message';

export default function Messenger() {

    useEffect(() => {
      let socket = io('http://localhost:3000');
  
      socket.emit('sendMessage', )
    })
    return (
      <>
      <Header/>
      <Message/>
      </>
    );
  }