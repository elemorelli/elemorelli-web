const form = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");
const submitButton = document.getElementById("submitButton");

const onSubmitForm = (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;
  console.log({ name, email, message });
};

const toggleDisable = () => {
  submitButton.disabled = !form.checkValidity();
};

toggleDisable();

nameInput.addEventListener("change", toggleDisable);
emailInput.addEventListener("change", toggleDisable);
messageInput.addEventListener("change", toggleDisable);

form.onsubmit = onSubmitForm;
