import { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

//Context
import {userContext} from'../utils/userContext'
//Components
import NavBar from './NavBar';
import FormContainer from './Form/FormContainer'
import Form from './Form/Form'
import FormHeader from './Form/FormHeader'
import FormSubheader from './Form/FormSubheader'
import LogInForm from './Form/LogInForm'


function Login() {
const  header = 'Welcome Back'
const  subheader = 'Enter your credentials to access your account'
    
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