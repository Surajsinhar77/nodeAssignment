import { useState } from 'react';
import './App.css';

import {Button} from '@material-tailwind/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button>Click me </Button>
    </>
  )
}

export default App
