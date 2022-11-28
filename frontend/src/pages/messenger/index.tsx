import { useEffect, useState } from 'react';
import {io, Socket} from 'socket.io-client';
import Header from '../../components/header';
import Message from '../../components/message';

export default function Messenger() {
    const [socket, setSocket] = useState<Socket>()
    const [ messages, setMessages] = useState<any[]>([])

    const send = (value: string) => {
        socket?.emit("sendMessagee", value)
    }
    const messageListener = (message: string) => {
        setMessages([...messages, message])
    }

    useEffect(() => {
      const newSocket = io('http://localhost:3000');
      setSocket(newSocket)
    }, [socket])

    useEffect(() => {
        socket?.on("findAllMessage", messageListener)
        return () => {
            socket?.off("findAllMessage", messageListener)
        }
    }, [messageListener])

    return (
      <>
      <Header/>
      <Message send={send} mesages={messages} />
      </>
    );
  }