import axios from "axios";

const backendUrl = process.env.BACKEND_URL;
const frontendToken = process.env.FRONTEND_TOKEN;

export const createContact = async (data) => {
  let result = {};
  await axios
    .post(`${backendUrl}/api/contact`, { ...data, frontendToken })
    .then((res) => {
      const { status, message } = res.data;
      result.status = status;
      result.message = message;
    })
    .catch((err) => {
      console.log(err);
    });

  return result;
};
