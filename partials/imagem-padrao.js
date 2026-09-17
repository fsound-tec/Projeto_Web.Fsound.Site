/*
 * Imagem padrão para produtos sem foto.
 *
 * Regra: qualquer <img> que não tenha src ou cujo arquivo não exista
 * (erro de carregamento) passa a exibir images/banners/no-image.webp.
 */
(function () {
    var esteScript = document.currentScript ? document.currentScript.src : "";

    // Resolve a partir da própria URL do script (.../partials/imagem-padrao.js),
    // funcionando tanto nas páginas da raiz quanto nas de subpastas.
    var IMAGEM_PADRAO = esteScript.replace(
        /partials\/[^/]*$/,
        "images/banners/no-image.webp"
    );

    function aplicarImagemPadrao(img) {
        if (!img || img.getAttribute("data-sem-imagem") === "1") return;
        img.setAttribute("data-sem-imagem", "1");
        img.classList.add("img--sem-imagem");
        img.src = IMAGEM_PADRAO;
    }

    // Define o src de uma <img> já reaproveitada (ex.: a do modal),
    // caindo para a imagem padrão quando não há caminho informado.
    function definirImagem(img, src) {
        if (!img) return;
        img.removeAttribute("data-sem-imagem");
        img.classList.remove("img--sem-imagem");
        if (src) {
            img.src = src;
        } else {
            aplicarImagemPadrao(img);
        }
    }

    // O evento error de <img> não borbulha: capturamos na fase de captura.
    document.addEventListener(
        "error",
        function (e) {
            if (e.target && e.target.tagName === "IMG") {
                aplicarImagemPadrao(e.target);
            }
        },
        true
    );

    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll("img").forEach(function (img) {
            if (!img.getAttribute("src")) aplicarImagemPadrao(img);
        });
    });

    window.IMAGEM_PADRAO = IMAGEM_PADRAO;
    window.aplicarImagemPadrao = aplicarImagemPadrao;
    window.definirImagem = definirImagem;
})();
