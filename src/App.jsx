import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Label} from './label.jsx'
import './App.css'

function App() {
  const [index, setIndex] = useState(-1);
  const [submited, setSubmited] = useState(false);
  function handleIndex(id) {
    if (id === index) {
      setIndex(-1);
    } else {
      setIndex(id);
    }
  }

  function handleSubmited() {
    setSubmited(true);
  }

  return (
    <>
      <div class='card' style={{
        backgroundColor: 'beige',
        borderRadius: 10,
      }}>
        {!submited ? <>
          <h1>Odin Project: CV Form</h1>
          <h2>Please enter your information: </h2>
          <div style={{display: 'flex'}}>
            <Label type='First Name: ' 
            labelName='John' 
            onClick={handleIndex} 
            inputShow={index == 0} 
            id='0' />

            <Label type='Last Name: ' 
            labelName='Doe'
            onClick={handleIndex} 
            inputShow={index == 1} 
            id='1' />
          </div>
          <Label type='Email: ' 
            labelName='JohnDoe@gmail.com'
            onClick={handleIndex} 
            inputShow={index == 2} 
            id='2' />
          
          <Label type='Phone Number: ' 
            labelName='123-456-7890'
            onClick={handleIndex} 
            inputShow={index == 3} 
            id='3' />

          <Label type='Education: ' 
            labelName='Blank University'
            onClick={handleIndex} 
            inputShow={index == 4} 
            id='4' />

          <button onClick={handleSubmited}>
            <h4>Submit</h4>
          </button>
          </> : <>
            <h1>Submited!</h1>
            <h2>Thank You!</h2>
          </>}
        
      </div>
    </>
  )
}

export default App
