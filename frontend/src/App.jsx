// import { useState } from 'react';
import { Navbar } from '@material-tailwind/react';
import './App.css';
// import LoginPage from './pages/LoginPage';

// import {Button} from '@material-tailwind/react'
import Test from './Test';
import Register from './pages/RegisterPage';
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
    {/* <LoginPage/> */}
<Navbar/>
      <Test/>
      <Register/>
    </>
  )
}

export default App
