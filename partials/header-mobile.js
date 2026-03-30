document.getElementById("header-placeholder").outerHTML = `
        <header id="header">
            <div class="header__inner">
                <a href="index-mobile.html" class="logo">
                    <img src="./images/logos/logo-transparent.png" alt="Fsound" />

                    <span class="logo__nome">Fsound</span>
                </a>

                <button class="hamburger"
                        id="btnMenu"
                        aria-label="Abrir menu"
                        onclick="toggleMenu()">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>

        <nav id="drawer">
            <a  class="drawer__link"
                href="index-mobile.html"
                onclick="fecharMenu()">
                Início
            </a>

            <a
                class="drawer__link"
                href="sobre-mobile.html"
                onclick="fecharMenu()"
                >Sobre</a
            >

            <a
                class="drawer__link"
                href="produtos-mobile.html"
                onclick="fecharMenu()"
                >Produtos</a
            >

            <a  class="drawer__link"
                href="contato-mobile.html"
                onclick="fecharMenu()">
                Contato
            </a>

            <a  class="drawer__wpp"
                href="https://wa.me/551120972094"
                target="_blank"
                rel="noopener"
                onclick="fecharMenu()">
                <img
                    src="icones/whatsapp-logo.svg"
                    alt=""
                    width="16"
                    height="16"
                    class="icone icone--branco"
                />
                    Fale pelo WhatsApp
                </a>
        </nav>
`;

(function () {
  var arquivo = location.href.split("/").pop().split("?")[0];

  var links = document.querySelectorAll(".drawer__link");

  links.forEach(function (a) {
    if (a.getAttribute("href") === arquivo) {
      a.classList.add("ativo");
    }
  });
})();
