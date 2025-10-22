import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/logo.png'

function App() {
  const [count, setCount] = useState(0)
  let thingsToDo = ["Belajar GIT & CLI", "Belajar HTML & CSS", "Belajar Javascript", "Belajar ReactJS Dasar", "Belajar ReactJS Advance"]


  return (
    <>
      <div className="container">
        <img src={logo} alt="" />
        <div className='header-form'>
          <h2 className='title'>THINGS TO DO</h2>
          <h3 className='desc'>during bootcamp in sanbercode</h3>
        </div>
        <div className="checkbox-container">
          {
            thingsToDo.map((thing, i) => (
              <div>
                <input type="checkbox" name="" id={i} />
                <label htmlFor={i}>{thing}</label>
              </div>

            ))
          }

          

        </div>
        <button className='submit-btn' type="submit">Send</button>
      </div>
    </>
  )
}

export default App
