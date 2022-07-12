import { ChatEngine } from 'react-chat-engine';

import LoginForm from './component/LoginForm';
import ChatFeed from './component/ChatFeed';

import './App-rce.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="359c8da4-dc65-4d3e-bfa6-72bff4bade92"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}
        /> 
    );
}

// userName=""
// userSecret=""
// userName="zackzimer"
// userSecret="123123"

export default App;