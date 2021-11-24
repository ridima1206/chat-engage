import { ChatEngine } from 'react-chat-engine';   // Chat engine install

import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';
import './App.css';

const projectID = 'cd728626-fc67-45af-ae95-99b911a2a36d';     // Initialises our project

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;        // Check if username pwd is already authorised in local storage

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
     renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}   // Initialising our chatfeed
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};  

// infinite scroll, logout, more customizations...

export default App;