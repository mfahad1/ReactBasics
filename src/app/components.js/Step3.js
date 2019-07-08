import React from 'react';
const Step3 = (props) => {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input
        className="form-control"
        id="password"
        name="password"
        type="password"
        placeholder="Enter password"
        value={props.email} // props from parent
        onChange={props.handleChange} // props from parent
      />
      <button className="btn btn-success btn-block">Sign up</button>
    </div>
  )
}

export default Step3;