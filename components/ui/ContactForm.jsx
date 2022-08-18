import { useState } from "react";
import TextField from "@mui/material/TextField";
import validator from "../utils/validator";
import { SubmitButton } from "../utils/Button";
import { createContact } from "../../api/contact";

const fields = [
  {
    type: "text",
    validation: "fullName",
    placeholder: "Full Name",
  },
  {
    type: "text",
    validation: "email",
    placeholder: "Email Address",
  },
  {
    type: "text",
    validation: "phoneNumber",
    placeholder: "Phone Number",
  },
  {
    type: "text",
    validation: "subject",
    placeholder: "Subject",
  },
];

const ContactForm = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [globalError, setGlobalError] = useState("");

  const handleChange = (event, validation) => {
    if (!submitting) {
      success && setSuccess("");
      globalError && setGlobalError("");

      const value = event.target.value;
      setData({
        ...data,
        [validation]: value,
      });

      const error = validator(value, validation);
      setErrors({
        ...errors,
        [validation]: error,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!submitting) {
      setSuccess("");
      setGlobalError("");

      let goAheadAndSubmit = true;
      const fields1 = [
        ...fields,
        {
          validation: "message",
        },
      ];

      for (let i = 0; i < fields1.length; i++) {
        const { validation } = fields1[i];
        let error = validator(data[validation], validation);

        // if there are errors and goAheadAndSubmit is true then make it false
        if (error && goAheadAndSubmit) {
          goAheadAndSubmit = false;
        }

        // set error
        setErrors((e) => ({
          ...e,
          [validation]: error,
        }));
      }
      if (goAheadAndSubmit) {
        setSubmitting(true);

        const { status, message } = await createContact(data);

        if (status === "success") {
          setSuccess(
            message ||
              "Successfully submitted your contact. You will receive response as soon as possible."
          );
          setData({
            fullName: "",
            email: "",
            phoneNumber: "",
            subject: "",
            message: "",
          });
        } else {
          setGlobalError(
            message || "Something went wrong please try again later"
          );
        }

        setSubmitting(false);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-6">
          {fields.map((field, index) => {
            const { type, validation, placeholder } = field;
            return (
              <div key={index}>
                <TextField
                  error={errors[validation] ? true : false}
                  label={placeholder}
                  value={data[validation]}
                  onChange={(event) => handleChange(event, validation)}
                  helperText={errors[validation]}
                  fullWidth
                  variant="standard"
                  disabled={submitting}
                />
              </div>
            );
          })}

          {/* For message */}
          <div className="sm:col-span-2">
            <TextField
              label="Message"
              variant="standard"
              fullWidth
              multiline
              maxRows={10}
              value={data["message"]}
              onChange={(event) => handleChange(event, "message")}
              error={errors["message"] ? true : false}
              helperText={errors["message"]}
              disabled={submitting}
            />
          </div>
        </div>
        {success && <div className="text-green-600 pt-1">{success}</div>}
        {globalError && <div className="text-red-500 pt-1">{globalError}</div>}
        <div className="mt-6 text-right">
          <SubmitButton submitting={submitting} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
