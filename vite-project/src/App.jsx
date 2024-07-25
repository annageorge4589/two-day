import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Add from './components/Add'
import View from './components/View'
import { Route, Routes} from 'react-router-dom'

function App() {
  const [appName, setAppName] = useState('StudApp');
  // let appName="StudApp";

  return (
    <>
    <h1>Welcome to {appName} project</h1>
    
      <Navbar/>
      <Routes>
        <Route path='/' element={<View/>}></Route>
        <Route path='/add' element={<Add person={{"name":"Aishwarya","adm":"PH4565","Dept":"Physics","sem":"s3"}}/>}>
        </Route>
      </Routes>
    
 </>
  )
}

export default App
