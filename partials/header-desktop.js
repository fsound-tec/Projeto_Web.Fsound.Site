document.getElementById("header-placeholder").outerHTML = `
        <header id="header">
            <div class="container header__inner">
                <a href="index-desktop.html" class="logo">
                    <img src="./images/logos/logo-transparent.png" alt="Fsound" />

                    <span class="logo__nome">Fsound</span>
                </a>

                <nav class="nav">
                    <a href="index-desktop.html">Início</a>

                    <a href="sobre-desktop.html">Sobre</a>

                    <a href="produtos-desktop.html">Produtos</a>

                    <a href="contato-desktop.html">Contato</a>
                </nav>
            </div>
        </header>
`;

(function () {
  var arquivo = location.href.split("/").pop().split("?")[0];

  var links = document.querySelectorAll(".nav a");

  links.forEach(function (a) {
    if (a.getAttribute("href") === arquivo) {
      a.classList.add("ativo");
    }
  });
})();
