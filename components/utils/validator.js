const validator = (value, validation) => {
  let error = "";
  value = value.trim();

  // Check if value is empty
  if (value === "") {
    error = "This field is required";
  } else {
    // validation for fullName
    if (validation === "fullName" && (value.length < 3 || value.length > 50)) {
      error = "Fullname should range from 3 - 50 characters";
    }

    // validation for email
    else if (validation === "email") {
      if (value.length > 50) {
        error = "Too long email address";
      } else if (!value.match(/^\w+([._]\w+)?@\w+\.\w+(\.\w+)?$/gi)) {
        error = "Invalid Email Address";
      }
    }

    // validation for phone number
    if (validation === "phoneNumber") {
      if (value.length > 20) {
        error = "Too long phone number";
      }
    }

    // validation for subject
    if (validation === "subject") {
      if (value.length < 5 || value.length > 200) {
        error = "Subject should range from 5 - 200 characters";
      }
    }

    // validation for message
    else if (validation === "message") {
      if (value.length < 20 || value.length > 1000) {
        error = "Message should range from 20 - 1000 characters";
      }
    }
  }

  return error;
};

export default validator;
