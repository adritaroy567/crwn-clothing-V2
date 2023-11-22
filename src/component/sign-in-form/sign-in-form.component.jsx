import { useState, useContext } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { UserContext } from '../../context/user.context';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';


const DefaultFormField = {
    email: '',
    password: '',
}

const SignIn = () => {
    const [formFields, setFormFields] = useState(DefaultFormField)
    const { email, password} = formFields

    console.log(formFields)

    const signInWithGoogle = async () => {
      await signInWithGooglePopup();
    };

    const resetFormFields = () =>{
        setFormFields(DefaultFormField)
    }

    const handleChange = (event) => {
        const {name, value} = event.target 
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
          await signInAuthUserWithEmailAndPassword(email, password);
          resetFormFields();
          } catch (error) {
            console.log('user sign in failed', error);
          }
    }

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type="email" onChange={handleChange} name='email' value={email}required/>
                <FormInput label='Password' type="password" onChange={handleChange} name='password' value={password}required/>
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn