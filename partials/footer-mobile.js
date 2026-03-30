document.getElementById("rodape-placeholder").outerHTML = `
        <footer id="rodape">
            <div class="rodape__marca">
                <img src="logos/logo-branco.png" alt="Fsound" />

                <p>Especialistas em áudio com tecnologia solar.</p>
            </div>

            <div class="acord">
                <button class="acord__btn" onclick="toggleAcord(this)">
                    Navegação <span class="acord__seta">&#9660;</span>
                </button>

                <div class="acord__corpo">
                    <a href="index-mobile.html">Início</a>

                    <a href="sobre-mobile.html">Sobre</a>

                    <a href="produtos-mobile.html">Produtos</a>

                    <a href="contato-mobile.html">Contato</a>
                </div>
            </div>

            <div class="acord">
                <button class="acord__btn" onclick="toggleAcord(this)">
                    Localização <span class="acord__seta">&#9660;</span>
                </button>

                <div class="acord__corpo">
                    <p>Rua Siqueira Bueno, 1576</p>

                    <p>Belenzinho, São Paulo - SP</p>

                    <a
                        href="https://maps.google.com/?q=Rua+Siqueira+Bueno,+1576,+Belenzinho,+São+Paulo"
                        target="_blank"
                        rel="noopener"
                        ><img
                            src="./images/icones/map-pin.svg"
                            alt=""
                            width="14"
                            height="14"
                            class="icone"
                        />
                        Ver no mapa</a
                    >
                </div>
            </div>

            <div class="acord">
                <button class="acord__btn" onclick="toggleAcord(this)">
                    Contato <span class="acord__seta">&#9660;</span>
                </button>

                <div class="acord__corpo">
                    <a href="tel:+551120972094"
                        ><img
                            src="./images/icones/phone.svg"
                            alt=""
                            width="14"
                            height="14"
                            class="icone"
                        />
                        (11) 2097-2094</a
                    >

                    <a
                        href="https://wa.me/551120972094"
                        target="_blank"
                        rel="noopener"
                        ><img
                            src="./images/icones/whatsapp-logo.svg"
                            alt=""
                            width="14"
                            height="14"
                            class="icone"
                        />
                        WhatsApp</a
                    >

                    <a href="mailto:comercial@fsound.com.br"
                        ><img
                            src="./images/icones/envelope.svg"
                            alt=""
                            width="14"
                            height="14"
                            class="icone"
                        />
                        comercial@fsound.com.br</a
                    >
                </div>
            </div>

            <div class="acord">
                <button class="acord__btn" onclick="toggleAcord(this)">
                    Redes Sociais <span class="acord__seta">&#9660;</span>
                </button>

                <div class="acord__corpo">
                    <a href="#" target="_blank" rel="noopener"
                        ><img
                            src="./images/icones/instagram-logo.svg"
                            alt=""
                            width="14"
                            height="14"
                            class="icone"
                        />
                        Instagram</a
                    >

                    <a href="#" target="_blank" rel="noopener"
                        ><img
                            src="./images/icones/facebook-logo.svg"
                            alt=""
                            width="14"
                            height="14"
                            class="icone"
                        />
                        Facebook</a
                    >
                </div>
            </div>

            <div class="acord">
                <button class="acord__btn" onclick="toggleAcord(this)">
                    Horário de Atendimento
                    <span class="acord__seta">&#9660;</span>
                </button>

                <div class="acord__corpo">
                    <p>Segunda a Sexta-feira</p>
                    <p>08:30h às 12:00h</p>
                    <p>13:00h às 17:30h</p>
                </div>
            </div>

            <div class="rodape__fundo">
                &#169; 2026 Fsound Importação Exportação e Comércio LTDA.
                CNPJ: 36.706.155/0001-95<br />
                Desenvolvido por: Ace4 Tecnologia
            </div>
        </footer>

        <a
            href="https://wa.me/551120972094"
            class="wpp-fixo"
            target="_blank"
            rel="noopener"
            aria-label="WhatsApp"
            ><img
                src="./images/icones/whatsapp-logo.svg"
                alt="WhatsApp"
                width="26"
                height="26"
                class="icone icone--branco"
        /></a>
`;
