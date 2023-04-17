let header = document.querySelector(".header");
header.innerHTML = `
  <div class="header-content">
  <div class="logo">
    <img src="images/site-logo.png" alt="logo">
    <h1 id="site-name">HR Website</h1>
  </div>
    <div class="page-links">
      <ul>
        <li><a href="index.html">home</a></li>
        <li><a href="search.html">search</a></li>
        <li><a href="add.html">add</a></li>
        <li><a href="update.html">Update</a></li>
        <li><a href="submitvacation.html">submit vacation</a></li>
        <li><a href="#">vacations list</a></li>
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
class card {
  constructor(n = "", id = "", R = "", from = "", to = "") {
    this.name = n;
    this.id = id;
    this.reason = R;
    this.from = from;
    this.to = to;
    this.cardStructure = `
      <div class="sub-flex">
        <p><b>${this.name}</b></p>
        <p>${this.reason}</p>
          <p><b>${this.id}</b></p>
      </div>
      <div class="sub-flex">
        <div class="sub-flex-row">
          <label for="from"> From </label>
          <input type="date" name="begin" placeholder="dd-mm-yyyy" value="${this.from}" min="1997-01-01" max="2030-12-31" disabled class="from">
        </div>
        <div class="sub-flex-row">
          <label for="to"> To </label>
          <input type="date" name="begin"
          placeholder="dd-mm-yyyy" value="${this.to}"
          min="1997-01-01" max="2030-12-31" disabled class="from">
        </div>
      </div>
      <div class="sub-flex">
        <button type="button" name="button" class="accept" onclick =closeAcceptedObject(this.parentNode.parentNode,${this.id})>Accept</button>
        <button type="button" name="button" class="reject" onclick ="closeRejectedObject(this.parentNode.parentNode)">Reject</button>
      </div>`
  }
  displayCard() {
    let d = document.createElement('div');
    d.className = "card";
    d.innerHTML = this.cardStructure;
    let container = document.querySelector('.vacations');
    container.appendChild(d);
  }
};
closeAcceptedObject = function(e,id){
  let lastID = localStorage.getItem("lastID");
  for (let i = 1; i < lastID; i++){
    let userid = localStorage.getItem(`userID ${i}`);
    if (userid == id){
      let userApprovedVacations = localStorage.getItem(`userApprovedVacations ${i}`);
      let userAvailableVacations = localStorage.getItem(`userAvailableVacations ${i}`);
      localStorage.removeItem(`vacationUserID ${i}`);
      localStorage.removeItem(`vacationToDate ${i}`);
      localStorage.removeItem(`vacationFromDate ${i}`);
      localStorage.removeItem(`vacationReason ${i}`);
      let vacationID = localStorage.getItem("vacations") || 1;
      vacationID--;
      localStorage.setItem(`vacations`,vacationID);
      userApprovedVacations++;
      userAvailableVacations--;
      localStorage.setItem(`userApprovedVacations ${i}`, userApprovedVacations);
      localStorage.setItem(`userAvailableVacations ${i}`, userAvailableVacations);
    }
  }
  e.remove();
}
closeRejectedObject = function(e){
  e.remove();
}
getName = function(e){
  let lastID = localStorage.getItem("lastID");
  for (let i = 1; i < lastID; i++){
    let userid = localStorage.getItem(`userID ${i}`);
    if (userid == e){
      return localStorage.getItem(`userName ${i}`);
    }
  }
}
let vacationsNumber = localStorage.getItem("vacations");
for (let i = 1; i < vacationsNumber; i++){
  let userID = localStorage.getItem(`vacationUserID ${i}`);
  let userName = getName(userID);
  let Reason = localStorage.getItem(`vacationReason ${i}`);
  let ToDate = localStorage.getItem(`vacationToDate ${i}`);
  let FromDate = localStorage.getItem(`vacationFromDate ${i}`);
  let Card = new card(userName, userID, Reason, FromDate, ToDate);
  Card.displayCard();
}