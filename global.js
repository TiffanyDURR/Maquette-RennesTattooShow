const headerDIV = document.querySelector("header");
const footerDIV = document.querySelector("footer");

headerDIV.innerHTML = `
<nav>
<div class="content">
  <a href="index.html"
    ><img
      src="assets/header-logo.png"
      alt="Logo Rennes Tattoo Show"
      class="headerLogo"
  /></a>
  <ul>
    <li><a href="artistes.html">Artistes</a></li>
    <li><a href="programmation.html">Programmation</a></li>
    <li><a href="marchands.html">Marchands</a></li>
    <li><a href="inscription.html">Inscription</a></li>
    <li><a href="billetterie.html">Billetterie</a></li>
    <li><a href="infos.html">Infos</a></li>
  </ul>
</div>
</nav>
`;

footerDIV.innerHTML = `
<div class="content">
<h4>Suivez nous !</h4>
<div class="social">
  <a href="#"><i class="fab fa-instagram"></i></a>
  <a href="#"><i class="fab fa-facebook"></i></a>
</div>
<p>Rennes Tattoo Show - Tous droits réservés 2023</p>
</div>
`;
