import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import ChatPage from './components/ChatPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={ <Homepage /> }></Route>
        <Route exact path="/chats" element={ <ChatPage /> }></Route>
      </Routes>  
    </div>
  )
}

export default App