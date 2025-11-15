const displayUserName = document.querySelector(".user-name");
const userForm = document.querySelector("form");

const formatUserName = (rawName) => {
  const trimmedName = rawName.trim();
  return trimmedName.length > 12
    ? `${trimmedName.slice(0, 11)}...`
    : trimmedName;
};

userForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = event.target.elements.username;
  const enteredName = nameInput.value;
  const formattedName = formatUserName(enteredName);

  displayUserName.textContent = formattedName;
  nameInput.value = "";
});
