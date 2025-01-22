import {useState} from 'react'

function App() {
  const [unreadMessages, setUnreadMessages] = useState(['a','b'])
  return (
    <>
      {unreadMessages.length > 0 && <h1>You have {unreadMessages.length} unread messages!</h1>}
      {unreadMessages == 0 && <p>You have no unread messages</p>}
    </>
  )
}

export default App
