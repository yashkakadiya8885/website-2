import { useState } from 'react'
import Nav from './nav';
import Routerspage from './Routerspage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      {/* <Routerspage/> */}
    </>
  )
}

export default App
