document.querySelector("#submit-email").addEventListener("click", e => {
  e.preventDefault();
  submitEmail();
});

function submitEmail(){
  console.log("submitting email")
  const email = document.querySelector("#email-input").value;
  window.location.href = `kiosk-select.html?email=${email}`;
}
