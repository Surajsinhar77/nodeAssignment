// import { useState } from 'react';
import { Navbar } from '@material-tailwind/react';
import './App.css';
import LoginPage from './pages/LoginPage';

// import {Button} from '@material-tailwind/react'
import Test from './Test';
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
    <LoginPage/>
<Navbar/>
      <Test/>
    </>
  )
}

export default App
