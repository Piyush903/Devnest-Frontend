export default function validateInfo(values) {
  let errors = {};
  if (!values.username.trim()) {
    errors.username = "Username Required";
  }
  if (!values.email) {
    errors.email = "Email required";
  } else if (
    !/^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/.test(
      values.email
    )
  ) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (!/^(?=[^\d_].*?\d)\w(\w|[!@#$%]){7,20}/.test(values.password)) {
    errors.password =
      "(Matches:password1 | pa$$word2 | pa!@#$%3) (Non-Matches:password | 1stpassword | $password#),lenght should be grater than 7 and less than 20";
  }

  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }
  return errors;
}
