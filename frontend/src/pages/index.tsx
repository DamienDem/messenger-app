import {io} from 'socket.io-client';
import Header from '../components/header';
import Message from '../components/message';

const socket = io('http://localhost:3000');
export default function Home() {
  return (
    <>
    <Header/>
    <Message/>
    </>
  );
}
