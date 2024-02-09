import { TextField,Stack,Button} from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
// create state to store data
   const[interest,setInterest]=useState(0)
   const[principle,setPrinciple]=useState(0)
   const[rate,setRate]=useState(0)
   const[year,setYear]=useState(0)


   const[principleAmountValidation,setPrincipleAmountValidation]=useState(true)
   const[RateAmountValidation,setRateAmountValidation]=useState(true)
   const[yearAmountValidation,setYearAmountValidation]=useState(true)
   const handleReset=()=>{
    // reset all values
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    // deep veryfication
    setPrincipleAmountValidation(true)
    setRateAmountValidation(true)
    setYearAmountValidation(true)
   }
   const handleValidation=(tag)=>{
      console.log("inside handleValidation");
      const {value,name}=tag
      console.log(value,name);
      console.log((!!value.match(/^[0-9]*.?[0-9]+$/)));
     if(!!value.match(/^\d*\.?\d+$/))
     {
        // valid
        if(name=="principle")
        {
          setPrinciple(value)
          setPrincipleAmountValidation(true)
        }
        else if(name=="rate")
        {
          setRate(value)
          setRateAmountValidation(true)
        }
        else{
          setYear(value)
          setYearAmountValidation(true)
        }
     }
     else{
       // invalid
        if(name=="principle")
        {
          setPrinciple(value)
          setPrincipleAmountValidation(false)
        }
        else if(name=="rate")
        {
          setRate(value)
          setRateAmountValidation(false)
        }
        else{
          setYear(value)
          setYearAmountValidation(false)
        }
     }
   }
   const handleCalculate=()=>{
    if(principle && rate && year)
    {
      setInterest(principle*rate*year/100)
      setPrinciple(0)
      setRate(0)
      setYear(0)
    }
    else{
      alert("Please fill the form Completely!!!!")
    }
   }
  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
<div style={{width:'600px'}} className='bg-white p-5 rounded shadow'>
        <h3>Simple Interest Calculator</h3>
        <p>Calculator your simple interest  Easily</p>
        <div className='d-flex justify-content-center align-items-center bg-warning p-3 rounded shadow flex-column text-light'>
          <h1>₹ {interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form  className='mt-5'>
          <div className="mb-3">
          <TextField className='w-100' id="outlined-basic-principle" label="₹ Principle Amount" variant="outlined" value={principle||""} name='principle' onChange={e=>handleValidation(e.target)}/>
          </div>
         {!principleAmountValidation && <div className="text-danger mb-3">*Invalid User Input</div>} 
          <div className="mb-3">
          <TextField className='w-100' id="outlined-basic-rate" label="Rate of interest (p.a)%" variant="outlined" value={rate||""}name='rate' onChange={e=>handleValidation(e.target)} />
          </div>
        {! RateAmountValidation && <div className="text-danger mb-3">*Invalid User Input</div>} 
          <div className="mb-3">
          <TextField className='w-100' id="outlined-basic-time" label="Time Period(Yr)" variant="outlined" value={year||""}name='year' onChange={e=>handleValidation(e.target)}/>
          </div>
          { ! yearAmountValidation &&<div className="text-danger mb-3">*Invalid User Input</div>}
          <Stack direction="row" spacing={2}>
            <Button onClick={handleCalculate} disabled={! principleAmountValidation || ! RateAmountValidation ||! yearAmountValidation} style={{width:'50%',height:'55px'}} className='bg-dark' variant='contained'>CALCULATE
            </Button>
            <Button  onClick={handleReset} style={{width:'50%',height:'55px'}}  variant='outlined'>RESET
            </Button>
          </Stack>
        </form>
</div>
</div>
  )
}

export default App
