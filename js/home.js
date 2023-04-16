let header = document.querySelector(".header");
header.innerHTML = `
  <div class="header-content">
  <div class="logo">
    <img src="images/site-logo.png" alt="logo">
    <h1 id="site-name">HR Website</h1>
  </div>
    <div class="page-links">
      <ul>
        <li><a href="#">home page</a></li>
        <li><a href="search.html">search</a></li>
        <li><a href="add.html">add</a></li>
        <li><a href="update.html">Update</a></li>
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
let list_symbol = document.querySelector('.symbol');
let list_opend = false;
let list = document.createElement('ul');
list.setAttribute('id','small-links');
let li1 = document.createElement('li');
let link1 = document.createElement('a');
link1.setAttribute('href','#');
link1.append("home page");
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
link3.setAttribute('href','add.html');
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