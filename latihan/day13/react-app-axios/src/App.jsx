import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './components/Table'
import Button from './components/Form'
import Form from './components/Form'

function App() {

  const [dataUpdate, setDataUpdate] = useState({})

  return (
    <>
      <div className="container ">
        <Form />
        <Table  />
      </div>
    </>
  )
}

export default App
