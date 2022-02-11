const validate = (values) => {
    const errors = {};
  /* validating name */
    if (!values.name) {
      errors.name = "First name is required";
    } else if (values.name.length < 6) {
      errors.name = "Invalid name length, it has to be six characters or more";
    } else if(values.name.length > 30){
        errors.name = "Invalid name length, it has to be less than 30 characters";
    }
    else {
      errors.name = "Nice name 😃";
    }
  
 
  
  /* validating email using regex to pass email */
    if (!values.email) {
      errors.email = "Email address is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
  
  /* validating passwords */
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length <= 6) {
      errors.password = "Password length is weak, need more than 6😩";
    } else {
      errors.password = "Password strength is ok 💪";
    }
  
  /* validating password verification with initial */
    if (!values.password_comfirmation) {
      errors.password_comfirmation = "Invalid password verification";
    } else if (values.password_comfirmation !== values.password) {
      errors.password_comfirmation = "Passwords don't match 😟";
    } else {
      errors.password_comfirmation = "Passwords match 👏";
    }
  
    return errors;
  };
  
  export default validate;