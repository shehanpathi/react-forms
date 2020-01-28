import React, {Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class UserDetail extends Component{
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  render(){
    const {values, handleChange } = this.props;

    return(
      <MuiThemeProvider>
        <>
          <AppBar title="Enter User Detail" />
          <TextField hintText="Enter your name" floatingLabelText="name"
          onChange={handleChange('firstName')}
          defaultValues={values.firstName}/>
          <br/>
          <TextField hintText="Enter your last name" floatingLabelText="lname"
          onChange={handleChange('lastName')}
          defaultValues={values.lastName}/>
          <br/>
          <TextField hintText="Enter your email" floatingLabelText="email"
          onChange={handleChange('email')}
          defaultValues={values.email}/>
          <br/>
          <RaisedButton label="continue" primary={true} style={styles.button}
          onClick={this.continue}/>
        </>
      </MuiThemeProvider>
    )

  }

}


const styles ={ 
  button:{
    margin:15
  }
}