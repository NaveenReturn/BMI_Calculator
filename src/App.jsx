import { useState } from 'react';
import brandlogo from "./assets/brand-logo.png"
import './App.css'
// please enter valid numeric values for heihgt and weight
function App() {
  const [height,setHeight] = useState("");
  const [weight,setWeight] = useState("");
  const [bmi,setBmi] = useState(null);
  const [bimStatus,setBmiStatus] = useState("");
  const [errorMessage,setErrorMessage] = useState("");
  const calculatebmi =()=>{
     const isValidHeight = /^\d+$/.test(height);
     const isValidWeight = /^\d+$/.test(height);
      if(isValidHeight && isValidWeight){
          const heightMeters = height / 100;
          const bmiValue = weight / (heightMeters * heightMeters);
          console.log(bmiValue.toFixed(2))
          setBmi(bmiValue.toFixed(2));
          if(bmiValue < 18.5){
             setBmiStatus("underweight");
          }else if(bmiValue >=18.5 && bmiValue < 24.9){
             setBmiStatus("Normal Weight")
          }else if(bmiValue >=25 && bmiValue < 249.9){
            setBmiStatus("Overweight")
         }else{
            setBmiStatus("Obses")
         }
         setErrorMessage("")
      }else{
         setBmi(null)
         setBmiStatus("")
         setErrorMessage("please enter valid numeric values for heihgt and weight")
      }
  } 
  return (
    <div className='banner-img'>
       <header>
           <div className="logo-brand">
           <img src={brandlogo} height={70} alt="selva" />
           </div>
       </header>
         <div className="welcome">
            <h2>WELCOME TO <span className='brand-name'>SELVALAKSHMI </span>BMI</h2>
         </div>
       <div className='main-container'>
       <div className='bmi-container'>
            <div className='box'></div>
            <div className="data">
               <h1>BMI Calculator</h1>
               { errorMessage && <div className="error">{errorMessage}</div>}
               <div className='input-container'>
                  <label htmlFor='height'>Height (cm):</label>
                  <input type='text' value={height}  id='height' onChange={(e)=>setHeight(e.target.value)} />
               </div>
               <div className='input-container'>
                  <label htmlFor='weight'>Weight (kg):</label>
                  <input type='text' value={weight}  id='weight' onChange={(e)=>setWeight(e.target.value)} />
               </div>
               <button onClick={calculatebmi}>Calculate BMI</button>
                 {bmi !== null && (
                 <div className="result">
                  <p>Your BMI is: {bmi}</p>
                  <p>Status: {bimStatus}</p>
               </div>
                 )}
            </div>
       </div>
       </div>
    </div>
  )
}

export default App
