const email = document.getElementById("emailInput");


form.addEventListener("submit", (e) => {
  let messages = [];
  if (email.value === "" || email.value == null) {
    messages.push("Field is required");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});
