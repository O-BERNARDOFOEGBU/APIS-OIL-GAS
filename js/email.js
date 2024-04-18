// import { SERVICE_ID, TEMPLATE_ID } from "../js/keys";

// export const sendMail = () => {

const validateInputs = () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  return name !== "" && email !== "" && subject !== "" && message !== "";
};

const toggleSendButton = () => {
  const sendBtn = document.getElementById("sendBtn");
  sendBtn.disabled = !validateInputs();
};

const sendMail = () => {
  if (!validateInputs()) {
    return; // Prevent sending mail if inputs are not valid
  }

  // Your existing sendMail function code here
  // };

  // const sendMail = () => {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // const serviceID = "service_vifytjq";
  // const templateID = "template_nbzwh1g";
  const serviceID = "service_4b7kvls";
  const templateID = "template_clv32ea";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message has been sent successfully!!");
    })
    .catch((err) => console.log(err));
};
