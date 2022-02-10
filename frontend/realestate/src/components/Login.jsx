import { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

//Context
import {userContext} from'../utils/userContext'
//Components
import NavBar from './NavBar';
import FormContainer from './Form/FormContainer'
import Form from './Form/Form'
import FormHeader from './Form/FormHeader'


function Login() {
const  text = 'Welcome Back'
    
    return (
     
     <FormContainer>
     <Form>
     <FormHeader text={text}>

     </FormHeader>

     </Form>
     </FormContainer>
 
    );
  }
  
  export default Login;