//import { signInWithGooglePopup , createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import SignUpForm from '../../components/sign-up/sign-up.component';
import SignInForm from '../../components/sign-in/sign-in.component';
import './authentication.styles.scss';

const Authentication = () => {
    // const logGoogleUser =  async () => {
    //     const { user } = await signInWithGooglePopup();
    //     const userDocRef =  await createUserDocumentFromAuth(user);
    // }

    return (
        <div className="authentication-container">
            {/* <button onClick={logGoogleUser}>
                Sign In with Google Popup
            </button> */}
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default Authentication;