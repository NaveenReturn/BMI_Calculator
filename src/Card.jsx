import React from 'react'

export const Card = () => {
 
    const handleclick = (e)=>{
        if(e.key === "Enter"){
            console.log("success")
        }else{
            console.log("not ya enter key")
        }
    }
    let person;
    console.log(person)
  return (
    <div>
         <input type='text' onKeyDown={handleclick}/>
        <button >Submit</button>
    </div>
  )
}
