import React from 'react'

const Step = ({index,formData,handleChange,handlePrev,handleNext,handleSubmit}) => {
  return (
    <div>
        <h1>Customer Details</h1>
        <br></br>
  {index==1 &&
   (<div id="step1">
   <label htmlFor="first_name">First Name:</label>
      <input type="text"  id="first_name" name="firstName" value={formData.firstName} onChange={handleChange}/>
      <br></br><br></br>
        <label htmlFor="last_name">Last Name:</label>
      <input type="text"  id="last_name" name="lastName" value={formData.lastName} onChange={handleChange}/>
      <br></br><br></br>
      </div>)
  }
  {index==2 &&
  ( <div id="step2">
        <label htmlFor="car_price">Make:</label>
      <input type="text"  id="car_price" name="make" value={formData.make} onChange={handleChange}/>
      <br></br><br></br>
      <label htmlFor="model">Model:</label>
      <input type="text"  id="model" name="model" value={formData.model} onChange={handleChange}/>
      <br></br><br></br>
      </div>
      )}
      {index==3 && (
        <div id='step3'>
        <label htmlFor="card-info">Credit Card Number:</label>
        <input id="card-info" type="tel" pattern="[0-9\s]{13,19}" minLength="0"
          maxLength="12" name='card_info' inputMode='numeric'
         placeholder="xxxx xxxx xxxx xxxx" required value={formData.card_info} onChange={handleChange}/>
         <br></br><br></br>
         <label htmlFor='expiry-date'>Expiry Date:</label>
         <input id='expiry-date' type="date" name="expiry_date" value={formData.expiry_date} onChange={handleChange}></input>
         <br></br><br></br>
         </div>
      )}
      {index>1 && (
        <button onClick={()=>handlePrev(index)}>Previous</button>
      )}
      {index<3 &&(
          <button onClick={()=>handleNext(index)}>Next</button>
      )}
      {index==3 && (
       <button onClick={handleSubmit}>Submit</button>
      )}
  
    </div>
  )
}

export default Step