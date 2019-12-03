import React, { Component } from 'react'; 
import SignUpForm from './SignUpForm'; 

export class DirectoryForm extends Component {
    state = {
        step: 1,
        firstName:'', 
        lastName:'', 
        emailAddress:'', 
        password:'', 
        confirmPassword:''
    }

    // This method will take user to the next step
    nextStep = () => {
        const { step } = this.state; 
        this.setState({
            step: step + 1
        }); 
    }

    // This method will take user back to the prior step
    priorStep = () => {
        const { step } = this.state; 
        this.setState({
            step: step - 1
        }); 
    }

    // This handles the changes that happens when the user types into any input field
    handleChange = input => event => {
        this.setState({[input]: event.target.value}); 
    }
    
    render() {
        const { step } = this.state; 
        const { firstName, lastName, emailAddress, password, confirmPassword } = this.state; 
        const values = { firstName, lastName, emailAddress, password, confirmPassword }

        switch(step) {
            case 1: 
            return (
                <SignUpForm>
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                </SignUpForm>
            )

            case 2: 
                return <h1> Registration Form </h1>

            case 3: 
                return <h1> Success Form </h1> 
                default: 
                    console.log('Please input your information again.');    
        }
    }
}

export default DirectoryForm; 