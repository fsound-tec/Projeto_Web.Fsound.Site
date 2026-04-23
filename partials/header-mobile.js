document.getElementById("header-placeholder").outerHTML = `
        <header id="header">
            <div class="header__inner">
                <a href="/" class="logo">
                    <img src="/images/logos/logo-transparent.png" alt="Fsound" />

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
                href="/"
                onclick="fecharMenu()">
                Início
            </a>

            <a
                class="drawer__link"
                href="/sobre"
                onclick="fecharMenu()"
                >Sobre</a
            >

            <a
                class="drawer__link"
                href="/produtos"
                onclick="fecharMenu()"
                >Produtos</a
            >

            <a  class="drawer__link"
                href="/contato"
                onclick="fecharMenu()">
                Contato
            </a>

            <a  class="drawer__wpp"
                href="https://wa.me/551120972094"
                target="_blank"
                rel="noopener"
                onclick="fecharMenu()">
                <img
                    src="/images/icones/whatsapp-logo.svg"
                    alt="Logo do WhatsApp"
                    width="20"
                    height="20"
                    class="icone icone--branco"
                />
                    Fale pelo WhatsApp
                </a>
        </nav>
`;

(function () {
    var dir = location.pathname.substring(0, location.pathname.lastIndexOf("/"));
    if (dir === "") dir = "/";
    document.querySelectorAll(".drawer__link").forEach(function (a) {
        if (a.getAttribute("href") === dir) a.classList.add("ativo");
    });
})();
