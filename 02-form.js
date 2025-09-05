const STORAGE_KEY = "feedback-msg";

const formEl = document.querySelector(".feedback-form");
const textareaEl = formEl.querySelector("textarea");

textareaEl.addEventListener("input", handleInput);
formEl.addEventListener("submit", handleSubmit);

populateTextArea();

function handleInput(event) {
  const massage = event.target.value;

  localStorage.setItem(STORAGE_KEY, massage);
}

function populateTextArea() {
  const massage = localStorage.getItem(STORAGE_KEY);
  if (massage) {
    textareaEl.value = massage;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  console.log("Відправлення форми");
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}
