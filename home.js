document.querySelector("#submit-email").addEventListener("click", e => {
  e.preventDefault();
  const isTermsAgreed = document.querySelector("#Terms").checked;
  const emailValue = document.querySelector("#email-input").value;

  if(isTermsAgreed){
    if(validateEmail(emailValue)){
      submitEmail();
    }
    else{
      window.alert("Please provide a valid email address.")
    }
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

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};