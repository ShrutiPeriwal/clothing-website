import { useState,useContext } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss';
import Button from '../button/button.component';
import { UserContext } from '../../contexts/user.context';

const defaultFormFields = { 
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    // const val = useContext(UserContext);
    // //console.log(formFields);
    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert('Password do not Match');
            return;
        }

        try {
            const {user}= await createAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user);

            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
            console.log('user creation encountered an error', error);
            }
        }
    }

    const handleChange = (event) => {
        const {name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className="sign-up-container">
        <h2>Don't have an Account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Enter your Name' type="text" required onChange={handleChange} name='displayName' value={displayName}/>

                <FormInput label='Enter your Email'type="email" required onChange={handleChange} name='email' value={email}/>

                <FormInput label='Enter your Password 'type="password" required onChange={handleChange} name='password' value={password}/>

                <FormInput label='Confirm Password' type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>

                <Button  type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;