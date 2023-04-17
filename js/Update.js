let header = document.querySelector(".header");
header.innerHTML = `
  <div class="header-content">
  <div class="logo">
    <img src="images/site-logo.png" alt="logo">
    <h1 id="site-name">HR Website</h1>
  </div>
    <div class="page-links">
      <ul>
        <li><a href="index.html">home page</a></li>
        <li><a href="search.html">search</a></li>
        <li><a href="add.html">add</a></li>
        <li><a href="#">Update</a></li>
        <li><a href="submitvacation.html">submit vacation</a></li>
        <li><a href="list_vacations.html">vacations list</a></li>
      </ul>
    </div>
    <div class="small-page-links">
      <span class="symbol">
        <div class="symbol-part-1"></div>
        <div class="symbol-part-2"></div>
        <div class="symbol-part-3"></div>
      </span>
    </div>
</div>`;
let footer = document.querySelector("footer");
footer.innerHTML= `<div class="footer-content">
<div class="logo">
  <img src="images/site-logo.png" alt="logo">
  <h1 id="site-name">HR Website</h1>
</div>
<div class="footer-section">
  <div class="footer-list">
      <ol>
        <h2>who are us ?</h2>
        <li>abdelrahman mohamed</li>
        <li>mohamed fathi</li>
        <li>mostafa elsawy</li>
        <li>moaz adly</li>
        <li>mohamed mahmoud</li>
      </ol>
  </div>
</div>
<div class="footer-section">
  <div class="footer-list">
      <ul>
        <h2>what's that ?</h2>
        <li>this is a humen resources managment website which aiming to make the jop of HRS more eaiser than it ever been </li>
      </ul>
  </div>
</div>
<div class="footer-section">
  <div class="footer-list">
      <ul>
        <h2>this phoject is :</h2>
        <li>from FCAI students for web technology course, supervises DR.Nemat Al tazi </li>
      </ul>
  </div>
</div>
</div>`;

class message {
  constructor(t = "", b = "", n = "") {
    this.name = n;
    this.text = t;
    this.buttonText = b;
    this.messageStructure = `
      <div class="message-container">
        <p>${this.text}</p>
        <button onclick="close_message(this.parentNode.parentNode)">${this.buttonText}</button>
      </div>
    `;
  }
  displayMessage() {
    let d = document.createElement('div');
    d.className = "message";
    d.setAttribute("id",this.name)
    d.innerHTML = this.messageStructure;
    document.forms[0].after(d);
    // document.write(this.messageStructure);
  }
};

let close_message = function (object) {
  object.remove();
}
let formErrorMessage = new message("invalid data, please insure that you inserted correct data.","ok","form-error");
let userName = document.forms[0].querySelector('#name-input');
let userEmail = document.forms[0].querySelector('#email-input');
let userID = document.forms[0].querySelector('#id-input');
let userAddress = document.forms[0].querySelector('#address-input');
let userPhoneNumber = document.forms[0].querySelector('#phone-input');
let userApprovedVacations = document.forms[0].querySelector('#approved-vacation');
let userAvailableVacations = document.forms[0].querySelector('#available-vacation');
let userSalary = document.forms[0].querySelector('#salary-input');
let userDateofBirth = document.forms[0].querySelector('#dob-input');
let userGender = document.forms[0].querySelector('input[name="os"]:checked');
let userMartialStatues = document.forms[0].querySelector('#martial-status-input');
let lastID = localStorage.getItem("lastID") || 1;
userName.onblur = function (){
  if(userName.value != "" && userName.value.length > 2 && userName.value.match("[A-Za-z]+")){
    userName.removeAttribute("style");
  } 
}
userID.onblur = function (){
  if(userID.value != "" && userID.value.match("[0-9]") &&  userID.value.length <= 14){
    userID.removeAttribute("style");
  } 
}
userEmail.onblur = function (){
  if(userEmail.value.match("[A-Za-z]+[0-9]*[@][A-Za-z]+[.][A-Za-z]+")){
    userEmail.removeAttribute("style");
  } 
}
userAddress.onblur = function (){
  if(userAddress.value != ""){
    userAddress.removeAttribute("style");
  } 
}
userPhoneNumber.onblur = function (){
  if(userPhoneNumber.value != "" && userPhoneNumber.value.match("[0-9]+")){
    userPhoneNumber.removeAttribute("style");
  } 
}
userApprovedVacations.onblur = function (){
  if(userApprovedVacations.value != "" && userApprovedVacations.value.match("[0-9]+")){
    userApprovedVacations.removeAttribute("style");
  } 
}
userAvailableVacations.onblur = function (){
  if(userAvailableVacations.value != "" && userAvailableVacations.value.match("[0-9]+")){
    userAvailableVacations.removeAttribute("style");
  } 
}
userSalary.onblur = function (){
  if(userSalary.value.match("[0-9]+")){
    userSalary.removeAttribute("style");
  } 
}
document.forms[0].onsubmit = function (ele){
  let validName = false,
      validEmail = false,
      validID = false,
      validAddress = false,
      validPhone = false,
      validApprovedVacations = false,
      validAvailableVacations = false,
      validSalary = false,
      validDob = true;
      if (userName.value != "" && userName.value.length > 2 && userName.value.match("[A-Za-z]+")){
        validName = true; 
      }else {
        userName.style.cssText = "border: 1px solid red;";
      }
      if (userID.value != "" && userID.value.match("[0-9]") &&  userID.value.length <= 14){
        validID = true;
      } else {
        userID.style.cssText = "border: 1px solid red;";
      }
      if (userEmail.value.match("[A-Za-z]+[0-9]*[@][A-Za-z]+[.][A-Za-z]+")){
        validEmail = true;
      }else {
        userEmail.style.cssText = "border: 1px solid red;";
      }
      if (userAddress.value != "" && userAddress.value.length > 8 ){
        validAddress = true;
      }else {
        userAddress.style.cssText = "border: 1px solid red;";
      }
      if (userPhoneNumber.value != "" && userPhoneNumber.value.match("[0-9]+") && userPhoneNumber.value.length <= 15){
        validPhone = true;
      }else {
        userPhoneNumber.style.cssText = "border: 1px solid red;";
      }
      if (userApprovedVacations.value != "" && userApprovedVacations.value.match("[0-9]+") && userApprovedVacations.value > 0){
        validApprovedVacations = true;
      }else {
        userApprovedVacations.style.cssText = "border: 1px solid red;";
      }
      if (userAvailableVacations.value != "" && userAvailableVacations.value.match("[0-9]+") && userAvailableVacations.value > 0){
        validAvailableVacations = true;
      }else {
        userAvailableVacations.style.cssText = "border: 1px solid red;";
      }
      if (userSalary.value.match("[0-9]+") && userSalary.value > 2000){
        validSalary = true;
      }else {
        userSalary.style.cssText = "border: 1px solid red;";
      }
      if (validName === false || validEmail === false || validID === false || validAddress === false  ||
        validPhone === false  || validApprovedVacations === false  || validAvailableVacations === false 
      || validSalary === false  || validDob === false ){
        ele.preventDefault();
        formErrorMessage.displayMessage();
      }
      else{
        localStorage.setItem(`userName ${lastID}`,userName.value);
        localStorage.setItem(`userEmail ${lastID}`,userEmail.value);
        localStorage.setItem(`userID ${lastID}`,userID.value);
        localStorage.setItem(`userAddress ${lastID}`,userAddress.value);
        localStorage.setItem(`userPhoneNumber ${lastID}`,userPhoneNumber.value);
        localStorage.setItem(`userApprovedVacations ${lastID}`,userApprovedVacations.value);
        localStorage.setItem(`userAvailableVacations ${lastID}`,userAvailableVacations.value);
        localStorage.setItem(`userSalary ${lastID}`,userSalary.value);
        localStorage.setItem(`userDateofBirth ${lastID}`,userDateofBirth.value);
        localStorage.setItem(`userGender ${lastID}`,userGender.value);
        localStorage.setItem(`userMartialStatues ${lastID}`,userMartialStatues.value);
        lastID++;
        localStorage.setItem(`lastID`,lastID);
      }
};
let clicked = false;
function open_list() {
  if (!clicked){
    document.getElementById('small-links').style.display = "flex";
    clicked = true;
  }
  else{
    document.getElementById('small-links').style.display = "none";
    clicked = false;
  }
}
function set_today_date(object) {
  const input_date = object;
  const date = new Date();
  input_date.value = `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,'0')}-${date.getDate()}`
}
set_today_date(document.getElementById('dob-input'));
let header_link_elements = document.querySelectorAll(".header .header-content .page-links ul li");
header_link_elements.forEach(function(ele) {
    ele.onclick = function() {
    header_link_elements.forEach(function (ele) {
      ele.classList.remove("active")
    });
    this.classList.add("active");
  };
});
let list_symbol = document.querySelector('.symbol');
let list_opend = false;
let list = document.createElement('ul');
list.setAttribute('id','small-links');
let li1 = document.createElement('li');
let link1 = document.createElement('a');
link1.setAttribute('href','index.html');
link1.append("home");
li1.append(link1);
list.append(li1);
let li2 = document.createElement('li');
let link2 = document.createElement('a');
link2.setAttribute('href','search.html');
link2.append("search");
li2.append(link2);
list.append(li2);
let li3 = document.createElement('li');
let link3 = document.createElement('a');
link3.setAttribute('href','#');
link3.append("add");
li3.append(link3);
list.append(li3);
let li4 = document.createElement('li');
let link4 = document.createElement('a');
link4.setAttribute('href','udate.html');
link4.append("udate");
li4.append(link4);
list.append(li4);
let li5 = document.createElement('li');
let link5 = document.createElement('a');
link5.setAttribute('href','submitvacation.html');
link5.append("submite vacation");
li5.append(link5);
list.append(li5);
let li6 = document.createElement('li');
let link6 = document.createElement('a');
link6.setAttribute('href','list_vacations.html');
link6.append("vacations list");
li6.append(link6);
list.append(li6);
list_symbol.onclick = function (){
  if(list_opend === false){
    list_symbol.append(list);
    list_opend = true;
  }
  else{
    list.remove();
    list_opend = false;
  }
};
// `
//   <ul id="small-links">
//     <li><a href="index.html">home</a></li>
//     <li><a href="search.html">search</a></li>
//     <li><a href="#">add</a></li>
//     <li><a href="update.html">Update</a></li>
//     <li><a href="submitvacation.html">submit vacation</a></li>
//     <li><a href="list_vacations.html">vacations list</a></li>
//   </ul>
// `