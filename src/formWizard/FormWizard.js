import React from 'react';
import './FormWizard.css';
import Step1 from './components.js/Step1';
import Step2 from './components.js/Step2';
import Step3 from './components.js/Step3';

const API = 'https://aqueous-garden-76572.herokuapp.com/';

class FormWizard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      email:  '',
      username: '',
      password: '',
    };
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { email, username, password } = this.state;
    const rawResponse = await fetch(API + 'sign-up', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, username, password })
    });
    const content = await rawResponse.json();
    console.log(content);
  }


  previousButton(){
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button
          type="button" onClick={ () => { this.setState({ currentStep: currentStep <= 1? 1: currentStep - 1 }) } }
          className="btn btn-secondary previousBtn"
        >
        Previous
        </button>
      )
    }
    return null;
  }
  nextButton(){
    let currentStep = this.state.currentStep;
    console.log('in nextButton::', currentStep);
    if(currentStep <3){
      return (
        <button
          className="btn btn-primary nextBtn"
          type="button" onClick={ () => { this.setState({ currentStep: currentStep >= 2? 3: currentStep + 1 }) } }
        >
        Next
        </button>
      )
    }
    return null;
  }

  // render method here...

  render() {
    return (
      <div className="container">    
        <h1>A Wizard Form!</h1>
        <p>Step {this.state.currentStep} </p>

        <p>Hey {this.state.username}</p>

        <form onSubmit={this.handleSubmit}>
              {/*
                render the form steps and pass required props in
              */}
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
          />
        </form>
        <div className="display-in-row">
          {this.previousButton()}
          {this.nextButton()}
        </div>
      </div>
    )
  }
}
export default FormWizard;