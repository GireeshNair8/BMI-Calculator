import { TextField } from '@mui/material';
import './App.css';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';

function App() {
  const[bmi, setBmi]=useState(0)
  const[bmiMessage, setBmiMessage]=useState('')
  const[height, setHeight]=useState(0)
  const[weight, setWeight]=useState(0)
  const[isHeight, setIsHeight]= useState(true)
  const[isWeight, setIsWeight]=useState(true)
  const getValidate=(e)=>{
    const{name, value}= e.target 
 /* console.log(name, value);*/
  /*console.log(!!value.match(/^[0-9]+$/))*/
  if(!!value.match(/^[0-9]*.?[0-9]+$/)){//*to convert to boolean*//
  if(name==='height'){
    setHeight(value)
  setIsHeight(true)
  }
  else if(name==='weight'){
   setWeight(value)
   setIsWeight(true)
  }
}
else{
  if(name==='height'){setHeight(value)
  setIsHeight(false)
  }
  else if(name==='weight'){
    setWeight(value)
    setIsWeight(false)
  }
}
  }
  const handleCalculate=(e)=>{
    e.preventDefault()
    if(!height || !weight){
      alert('please fill the form')
    }
    else{
      let bmi= (weight/(height*height)*10000)
      setBmi(bmi.toFixed(1))
    
    let message='';
    if(bmi<18.5){
      message='You are Underweight';
    }else if(bmi>=18.5&&bmi<25){
      message='You are Normal weight';
    }else if(bmi>=25&&bmi<30){
      message='You are Overweight';
    }else{
      message='You are Obese';
    }setBmiMessage(message)
    }
  }
  const handleReset=(e)=>{
    setBmi(0)
    setHeight(0)
    setWeight(0)
    setIsHeight(true)
    setIsWeight(true)
  }
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      <div className='bg-light p-5 rounded text-center' style={{width:'500px'}}>
        <h1 className='text-success'>BMI APP</h1>
        <div className='bg-danger d-flex justify-content-center align-items-center w-100 p-4 rounded flex-column'>
          <h1 className='text-light'>{bmi}</h1>
          <p className='text-light'>BMI</p>
          <p className='text-light'>{bmiMessage}</p>
        </div>
        <form className='mt-5' onSubmit={handleCalculate}>
          <div className='mb-3'>
          <TextField name="height" value={height || ""} onChange={(e)=>getValidate(e)}className='w-100' id="outlined-basic" label="Height(In Cm)" variant="outlined" />
          </div>
          {!isHeight&&
          <div>
            <p className='text-danger fw-bolder'>Invalid Input</p>
          </div>}
          <div className='mb-3'>
          <TextField  name='weight' value={weight || ""} onChange={(e)=>getValidate(e)} className='w-100' id="outlined-basic" label="Weight(In Kg)" variant="outlined" />
          </div>
          {
            !isWeight &&
            <div>
              <p className='text-danger fw-bolder'>Invalid Input</p>
            </div>
          }
          <Stack className='mt-5' direction="row" spacing={2}>
          <Button type="submit" disabled={isHeight&&isWeight?false:true}className='bg-primary' style={{width:'200px', height:'50px'}}variant="contained">Calculate</Button>
<Button onClick={handleReset} style={{width:'200px', height:'50px'}} variant="outlined">Reset</Button>
</Stack>
        </form>
        </div>
    </div>
  );
}

export default App;