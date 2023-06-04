//get elements from html
const formInput = document.querySelector(".form-input");
const formControlBtn = document.querySelector(".form-control-btn");
const mainCard = document.querySelector(".card-main");
const successCard = document.querySelector(".card-success");
let emailSpan = document.querySelector(".email-span");
const errorLabel = document.querySelector(".error-label");
const dismissBtn = document.querySelector(".dismiss-btn");

//create main function
const submitFunction = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const enteredEmail = formInput.value.trim();

  //run if the email format entered is valid
  if (enteredEmail && emailRegex.test(enteredEmail)) {
    //hide main card
    mainCard.classList.add("d-none");
    //show success card
    successCard.classList.remove("d-none");
    successCard.classList.add("animate__pulse");
    //insert specified email into success text
    emailSpan.textContent = enteredEmail;
    emailSpan.style.fontWeight = "700";
    //display console log
    console.log("Your submission is successfull");
  } else {
    //Display an error indicating that a valid email address is required
    errorLabel.classList.remove("d-none");
    errorLabel.classList.add("animate__bounceIn");
    formInput.classList.add("form-control-error");
    console.log("Email adress you entered is not valid. try again...");
  }
};

//run the function by clicking form-control-btn
formControlBtn.addEventListener("click", function () {
  submitFunction();
});

//listen for input event and remove error classes when user is trying to correct the email
formInput.addEventListener("input", () => {
  formInput.classList.remove("form-control-error");
  errorLabel.classList.add("d-none");
});

//reload page when clicking on dismiss-btn
dismissBtn.addEventListener("click", function () {
  location.reload();
});

//listen for ENTER click when user is inside the input element
formInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault(); // Prevent the default form submission
    submitFunction();
  }
});

//clear input field on reload
window.addEventListener("beforeunload", () => {
  formInput.value = "";
});
