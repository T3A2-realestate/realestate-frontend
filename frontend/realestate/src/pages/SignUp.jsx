import { useContext, useEffect } from 'react';


// Context
import {userContext} from'../utils/userContext'


// Redirect method
import { useNavigate } from 'react-router-dom'

// Login Components
import FormContainer from '../components/Form/FormContainer'
import Form from '../components/Form/Form'
import FormHeader from '../components/Form/FormHeader'
import FormSubheader from '../components/Form/FormSubheader'
import SignUpForm from '../components/Form/SignUpForm'


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