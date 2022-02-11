import { useContext, useEffect } from 'react';


// Context
import {userContext} from'../utils/userContext'
// Components
import NavBar from './NavBar';

// Redirect method
import { useNavigate } from 'react-router-dom'


// Login Components
import FormContainer from './LogInForm/FormContainer'
import Form from './LogInForm/Form'
import FormHeader from './LogInForm/FormHeader'
import FormSubheader from './LogInForm/FormSubheader'
import LogInForm from './LogInForm/LogInForm'

function Login() {
// login form text
const  header = 'Welcome Back'
const  subheader = 'Enter your credentials to access your account'

const navigate = useNavigate()
const {state: userState,signIn} = useContext(userContext)


    return (
     
     <FormContainer>
     <Form>
     <FormHeader text={header} />
     <FormSubheader text={subheader} />
     
     <LogInForm/>
     </Form>
     </FormContainer>
 
    );
  }
  
  export default Login;