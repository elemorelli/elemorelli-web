const form = document.getElementById("contactForm");

const onSubmitForm = (event) => {
  event.preventDefault();
  const name = event.target.children.name.value;
  const email = event.target.children.email.value;
  const message = event.target.children.message.value;
  console.log({ name, email, message });
};

form.onsubmit = onSubmitForm;
