document.querySelector("#submit-email").addEventListener("click", e => {
  e.preventDefault();
  const isTermsAgreed = document.querySelector("#Terms").checked;
  if(isTermsAgreed){
    submitEmail();
  }
  else {
    window.alert("You must agree to the terms in order to print")
  }
});

document.getElementById("Terms").required = true; 

function submitEmail(){
  console.log("submitting email")
  const email = document.querySelector("#email-input").value;
  window.location.href = `kiosk-select.html?email=${email}`;
}
