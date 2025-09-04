
import React from "react"
export default function AddInputValues({textLabel,inputType , inputId , inputValue ,onInputChange}){
 return (
    <div>
      <label >{textLabel}:<br></br>
        <input type={inputType} id={inputId}  value={inputValue}  onChange={onInputChange}/><br></br><br></br>
      

      </label>

    </div>
 )

}

export  function AddSelect({inputId , inputValue ,onInputChange ,textLabel}){
  return (
     <div>
       <label style={{textAlign:"right"}}>{textLabel}:<br></br>
        
         <select id={inputId}  value={inputValue} onChange={onInputChange}>
         <option value="Specialists"> Specialists</option>
         <option value="Dr.Krishnaveni-Gynacologist">Dr.Krishnaveni-Gynacologist</option>
           <option value="Dr.John- Dermatologist"> Dr.John- Dermatologist</option>
                    <option value="Dr.Robert-Pediatrician">Dr.Robert-Pediatrician</option>
                    <option value="Dr.Travis- Surgeon">Dr.Travis- Surgeon</option> 
                   <option  value="Dr.Smith-Cardialogist">Dr.Smith-Cardialogist</option>
       
 
         </select>
 
       </label>
 
     </div>
  )
 
 }