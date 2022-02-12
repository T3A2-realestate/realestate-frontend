import { useContext, useEffect } from 'react';


// Context
import {userContext} from'../utils/userContext'
// Components
import NavBar from '../components/NavBar';

// Redirect method
import { useNavigate } from 'react-router-dom'


// Login Components
import FormContainer from '../components/Form/FormContainer'
import Form from '../components/Form/Form'
import FormHeader from '../components/Form/FormHeader'
import FormSubheader from '../components/Form/FormSubheader'
import LogInForm from '../components/Form/LogInForm'

function Login() {
// login form text
const  header = 'Welcome Back 🚀'
const  subheader = 'Enter your credentials to access your account'
const  linkSignUp = {
  status:'don\'t',
  register:'Register'
}

const navigate = useNavigate()
const {state: userState,signIn} = useContext(userContext)


    return (
     
     <FormContainer>
     <Form>
     <FormHeader text={header} />
     <FormSubheader text={subheader} />
     
     <LogInForm linkSignUp={linkSignUp}/>
     </Form>
     </FormContainer>
 
    );
  }
  
  export default Login;