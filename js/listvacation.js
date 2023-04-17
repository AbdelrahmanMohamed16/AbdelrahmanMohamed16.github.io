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
        <li><a href="#">add</a></li>
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