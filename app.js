const email = document.getElementById("email");
const format = document.getElementById("form");
const body = document.getElementsByTagName("BODY")[0];

let warning = document.createElement("P");
let text = document.createTextNode("Please provide a valid email address");
warning.appendChild(text);  

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

function validate() {
    const mail = email.value;
    if (validateEmail(mail)) {
        return true
    }
    if (body.offsetWidth >= 615 && !validateEmail(mail)){
       format.appendChild(warning)
       email.style.borderColor = "#ff3366";
       return false
    }
    else {
        email.after(warning);
        email.style.borderColor = "#ff3366";
        return false
    }
}



form.addEventListener

