const validate = (values) => {
    const errors = {};
  /* validating phone */
    if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/ig.test(values.phone)){
        errors.phone = "Invalid phone number 😩"
    }
    else {
      errors.phone = "Nice number 😃";
    }
  
 
  
  /* validating email using regex to pass email */
    if (!values.email) {
      errors.email = "Email address is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    } else {
        errors.email = "Awesome email 😁";
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