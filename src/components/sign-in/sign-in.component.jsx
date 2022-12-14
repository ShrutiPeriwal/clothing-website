import { useState } from 'react';
import { signInWithGooglePopup, signInAuthWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
// import { UserContext } from '../../contexts/user.context';
import './sign-in.styles.scss';
import Button from '../button/button.component';

const defaultFormFields = { 
    email: '',
    password: '',
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;

    // const { setCurrentUser } = useContext(UserContext);

    //console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle =  async () => {
            await signInWithGooglePopup();
            // setCurrentUser(user);
           
         }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthWithEmailAndPassword(email, password);
            console.log(user);
            // setCurrentUser(user);
            resetFormFields();
        } catch(error) {
            switch(error.code) {
                case 'auth/wrong-password': 
                    alert('Incorrect Password for email'); 
                    break

                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break
                
                default:
                    console.log(error);
            }
            // if(error.code == "auth/wrong-password") {
            //     alert("Incorrect Password")
            // } elseif (auth/user-not-found)
            // console.log(error);
        }
    }

    const handleChange = (event) => {
        const {name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className="sign-up-container">
        <h2>Already have an Account</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Enter your Email'type="email" required onChange={handleChange} name='email' value={email}/>

                <FormInput label='Enter your Password 'type="password" required onChange={handleChange} name='password' value={password}/>

            <div className='buttonscontainer'>
                <Button  type="submit">Sign In</Button>
                <Button type="button" buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
            </div>
            </form>
        </div>
    );
};

export default SignInForm;