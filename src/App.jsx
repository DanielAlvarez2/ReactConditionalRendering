import {useState} from 'react'

function App() {
  const [messages, setMessages] = useState(['a','b'])
  return (
    <>
      {(messages.length == 0) ? 
            <h1>You're all caught up!</h1> : 
            <h1>You have {messages.length} unread {messages.length == 1 ? 'message' : 'messages'}</h1>}
      
    </>
  )
}

export default App
