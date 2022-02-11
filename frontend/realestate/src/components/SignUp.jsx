import { useContext, useEffect } from 'react';


// Context
import {userContext} from'../utils/userContext'
// Components
import NavBar from './NavBar';

// Redirect method
import { useNavigate } from 'react-router-dom'


// Login Components
import FormContainer from './Form/FormContainer'
import Form from './Form/Form'
import FormHeader from './Form/FormHeader'
import FormSubheader from './Form/FormSubheader'
import SignUpForm from './Form/SignUpForm'


function SignUp() {
// Sign up form text
const  header = 'Welcome 👏'
const  subheader = 'Enter credentials to create your account'
const  linkSignIn = {
  status:'already',
  LogIn:'Log In'
}

const navigate = useNavigate()
const {state: userState,signIn} = useContext(userContext)


    return (
     
     <FormContainer>
     <Form>
     <FormHeader text={header} />
     <FormSubheader text={subheader} />
     
     <SignUpForm linkSignIn={linkSignIn}/>
     </Form>
     </FormContainer>
 
    );
  }
  
  export default SignUp;