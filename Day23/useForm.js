import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  // The goal here is to handle ALL inputs with a single onChange handler
  // In order to update and keep track of our input fields every time they change, we need to create a handleInputChange function (see below)
  // What's happening here? (quick recap)
  // First, we're using object destructuring to get or extract the name and the value attributes from our inputs (look at the the comments below - they're equivalent)
  // Then, we're updating our values state object with the existing values by using the setValues() function and the spread operator
  // And finally, we're updating the value of the event that was triggered by that onChange with this ES6 syntax: [name]: value
  // This is a very important step! We need to add a name attribute to our inputs and [name]: value here means that we're setting a dynamic name property key (taken from our inputs - e.g. company: e.target.value) which will be equal to the value of our current input state.
  // const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
