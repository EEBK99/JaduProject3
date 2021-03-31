const fullNameInput = document.getElementById("contactfieldName");
const emailInput = document.getElementById("contactfieldEmail");
const msgInput = document.getElementById("contactfieldMessage");
const contactcheckbox = document.getElementById("contactcheckbox");
const btnSend = document.getElementById("btn_send");

var contactJsonStorage = localStorage.getItem("contactList");
var JsonToUser = JSON.parse(contactJsonStorage);
let contactList = JsonToUser || [];

class contactCLass {
  id;
  fullname;
  email;
  message;
  checkbox;

  constructor(id, fullname, email, message, checkbox) {
    this.id = id;
    this.fullname = fullname;
    this.email = email;
    this.message = message;
    this.checkbox = checkbox;
  }
}
btnSend.addEventListener("click", function () {
  if (
    fullNameInput.value != "" &&
    emailInput.value != "" &&
    msgInput.value != ""
  ) {
    var varContact = new contactCLass(
      Date.now(),
      fullNameInput.value,
      emailInput.value,
      msgInput.value,
      contactcheckbox.value
    );
    contactList.push(varContact);
    var contactJsonStorage = JSON.stringify(contactList);
    localStorage.setItem("contactList", contactJsonStorage);
    alert("Message sent successfully.");
    console.log(contactList);
  } else {
    alert("Fields are empty!");
  }
});
