import React, {Component } from 'react'
import {UserDetail} from './UserDetail'
export class UserForm extends Component{
  state = {
    step:1,
    firstName:'',
    lastName:'',
    occupation:'',
    email:''
  }

  nextStep = () => {
    const {step } = this.state;
    this.setState({
      step:step + 1
    })
  }

  prevStep = () => {
    const {step } = this.state;
    this.setState({
      step:step - 1
    })
  }

  handleChange = input => e =>{
    this.setState({[input]: e.target.value})
  }
  render(){
    const {step} = this.state;
    const {firstName, lastName, email, occupation} = this.state;
    const values = {firstName, lastName, email, occupation};

    switch(step){
      case 1:
        return(
          <UserDetail 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return(
          <h1>FormPersonal</h1>
        )
      case 3:
        return (
          <h1>Confirm</h1>
        )
      case 3:
        return (
          <h1>Success</h1>
        )
    }
   
  }
}