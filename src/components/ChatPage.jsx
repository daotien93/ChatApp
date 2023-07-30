import React, { useState } from 'react'
//import axios from 'axios'

const ChatPage = () => {
    const [chats, setChats] = useState([])
    React.useEffect(() => {
        fetch("http://localhost:5000/api/chat")
          .then((res) => res.json())
          .then((data) => setChats(data));
      }, []);
    
  return (
    <div>
        { chats.map((chat) => (
            <div key={chat._id}>{chat.chatName}</div>
        ))}
    </div>
  )
}

export default ChatPage