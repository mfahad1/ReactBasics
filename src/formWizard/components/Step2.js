import React from 'react';
const Step2 = (props) => {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="username">User Name</label>
      <input
        className="form-control"
        id="username"
        name="username"
        type="text"
        placeholder="Enter Username"
        value={props.email} // props from parent
        onChange={props.handleChange} // props from parent
      />
    </div>
  )
}

export default Step2;