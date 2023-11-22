import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import '../sign-up-form/sign-up-form.styles.scss'
import { useState } from "react"
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
  } from '../../utils/firebase/firebase.utils';

const DefaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword:''
}


const SignUp = () => {
    const [formFields, setFormFields] = useState(DefaultFormField)
    const {displayName, email, password, confirmPassword} = formFields
    

    console.log(formFields)

    const resetFormFields = () =>{
        setFormFields(DefaultFormField)
    }

    const handleChange = (event) => {
        const {name, value} = event.target 
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert('passwords do not match')
            return
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(
                email,
                password
            )
            await createUserDocumentFromAuth(user, {     });
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
              alert('Cannot create user, email already in use');
            } else {
              console.log('user creation encountered an error', error);
            }
        }
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' onChange={handleChange} name='displayName' value={displayName}  required/>
                <FormInput label='Email' type="email" onChange={handleChange} name='email' value={email}required/>
                <FormInput label='Password' type="passward" onChange={handleChange} name='email' value={password}required/>
                <FormInput label='Confirm Password'type="confirm password" onChange={handleChange} name='confirmPassword' value={confirmPassword}required/>
                <Button type="submit" >Sign-in</Button>
            </form>
        </div>
    )
}

export default SignUp