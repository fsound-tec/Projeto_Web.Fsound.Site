document.getElementById("header-placeholder").outerHTML = `
        <header id="header">
            <div class="container header__inner">
                <a href="/" class="logo">
                    <img src="/images/logos/logo-transparent.png" alt="Fsound" />
                    <span class="logo__nome">Fsound</span>
                </a>

                <nav class="nav">
                    <a href="/">Início</a>
                    <a href="/sobre/index.html">Sobre</a>
                    <a href="/produtos/index.html">Produtos</a>
                    <a href="/contato/index.html">Contato</a>
                </nav>

                <button class="hamburger" id="btnMenu" aria-label="Abrir menu" onclick="toggleMenu()">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>

        <nav id="drawer">
            <a class="drawer__link" href="/" onclick="fecharMenu()">Início</a>
            <a class="drawer__link" href="/sobre/index.html" onclick="fecharMenu()">Sobre</a>
            <a class="drawer__link" href="/produtos/index.html" onclick="fecharMenu()">Produtos</a>
            <a class="drawer__link" href="/contato/index.html" onclick="fecharMenu()">Contato</a>
            <a class="drawer__wpp" href="https://wa.me/5511996113888" target="_blank" rel="noopener" onclick="fecharMenu()">
                <img src="/images/icones/whatsapp-logo.svg" alt="" width="16" height="16" class="icone icone--branco" />
                Fale pelo WhatsApp
            </a>
        </nav>
`;

window.toggleMenu = function () {
    var d = document.getElementById("drawer"),
        b = document.getElementById("btnMenu");
    var a = d.classList.toggle("aberto");
    b.classList.toggle("aberto", a);
    document.body.style.overflow = a ? "hidden" : "";
};

window.fecharMenu = function () {
    document.getElementById("drawer").classList.remove("aberto");
    document.getElementById("btnMenu").classList.remove("aberto");
    document.body.style.overflow = "";
};

(function () {
    var dir = location.pathname.substring(0, location.pathname.lastIndexOf("/")) || "/";
    document.querySelectorAll(".nav a, .drawer__link").forEach(function (a) {
        var href = a.getAttribute("href");
        var section = href === "/" ? "/" : href.substring(0, href.indexOf("/", 1));
        if (section === dir) a.classList.add("ativo");
    });
})();
