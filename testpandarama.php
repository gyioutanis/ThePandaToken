<?php include 'headermmtest.php'; ?>


    <main class="home">

        <section class="home-intro-wrap" style="background-image: url('assets/img/temp/home-banner-bg.jpg');">
            <div class="home-intro gen-width gen-rim white-font">
                <div class="home-intro-inner">
                    <div class="home-intro__text">
                        <img src="assets/img/logo-pandatoken.png" alt="Logo PandaToken" width="110">
                        <br>
                        <br>
                        <h1><span class="gen-font-gradient">Pandarama</span></h1>
<!--                        <h4>an extraordinary token for extraordinary people</h4>-->
<!--                        <br>-->
<!--                        <a href="https://pancakeswap.finance/swap?outputCurrency=0x6B83AA762ec10EcfcBcd1E4C2E7cE86Cb09209E9" class="btn--img"><img src="assets/img/temp/app-pancakeswap@2x.png" width="180" alt="Buy on Pancakeswap"></a>-->
<!--                        <a href="https://app.uniswap.org/#/swap?use=V2&outputCurrency=0x6B83AA762ec10EcfcBcd1E4C2E7cE86Cb09209E9&inputCurrency=ETH" class="btn--img"><img src="assets/img/temp/app-uniswap@2x.png" width="151" alt="Buy on Uniswap"></a>-->
                    </div>

                    <div class="home-intro__text2" style="margin-top: 20px;">
                        <div style="display: inline-block;">
                            <button id="connect_wallet" class="btn-main" style="display: none;">
                                Connect wallet
                            </button>
                        </div>


                        <div id="wallet_connected" style="display: none;">
                            <p></p>
                            <p id="connectedTo"></p>
                            <br>
                            <hr style="background: #ffffff;">
                            <br>

                                <button id="switch" class="btn-main" style="margin: 20px auto auto;">
                                    Switch Network
                                </button>

                            <div id="has_no_stake" style="display: none;">
                                <p>Stake amount (min 10 wZEE)</p>
                                <input id="amount" min="0" type="number" name="amount" pattern="[0-9]+(\.[0-9][0-9]?)?" placeholder="000.00" style="margin-top: 20px;background: #ffffff;border-radius:20px;color: #666666;" />
                                <button id="stake" class="btn-main" style="margin: 20px auto auto;">
                                    Stake
                                </button>
                            </div>

                            <div id="has_stake" style="display: none;">

                                <p id="your_stake">Your stake</p>
                                <p id="borrowed_amount"></p>
                                <p id="reward_amount"></p>

                                <button id="relase_stake" class="btn-main" style="display: none;margin: 20px auto auto;">
                                    Release Stake
                                </button>

                                <button id="borrow_from_stake" class="btn-main" style="display: none;margin: 20px auto auto;">
                                    Borrow
                                </button>

                            </div>
                            <br>
                            <hr style="background: #ffffff;">
                            <br>
                        </div>



                        <div id="mmconnect" tabindex="-1" aria-labelledby="mmconnect" aria-hidden="true" style="display: none;">
                            <h4>Invalid protocol http</h4>
                            <p>Connection is not secure over http.</p>

                        </div>
                    </div>



<!--                    <div class="home-intro__text2" id="about">-->
<!--                        <h2>What is <span class="gen-font-gradient">$Panda Token?</span></h2>-->
<!--                        <p>PANDA is a utility token designed to create wealth for sports charities and sports lovers. It is used to buy iconic sports related NFTs. A 10% tax on every trade or transfer is distributed to PANDA holders, project liquidity and project infrastructure enhancement.</p>-->
<!--                    </div>-->
<!--                    <div class="home-intro__info">-->
<!--                        <div class="home-intro__info__item">-->
<!--                            <div class="home-intro__info__item-inner">-->
<!--                                <p class="p--22"><b>$Panda on Ethereum</b></p>-->
<!--                                <p class="p--20">Burnt: 500T Circulating: 500T Max Supply: 1Q</p>-->
<!--                                <div class="footer__links__item" style="padding:0px;">-->
<!--                                    <a href="https://v2.info.uniswap.org/pair/0x8c2330eeb968d3893aa73969f0ca01f3edb20654">ETH /PANDA Explorer</a>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="home-intro__info__item">-->
<!--                            <div class="home-intro__info__item-inner">-->
<!--                                <p class="p--22"><b>$Panda on Binance Smart Chain</b></p>-->
<!--                                <p class="p--20">Burnt: 500T Circulating: 500T Max Supply: 1Q</p>-->
<!--                                <div class="footer__links__item" style="padding:0px;">-->
<!--                                    <a href="https://www.dextools.io/app/pancakeswap/pair-explorer/0x23805c78316492a2e46e8d5070b4a8eadd3ce0f6">WBNB /PANDA Explorer</a>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
                </div>


            </div>



        </section>


    </main>

    <div class="modal fade" id="infomodal" tabindex="-1" aria-labelledby="infomodal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered de-modal">
            <div class="modal-content">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="modal-body">
                    <div class="p-3 form-border">
                        <h3 id="info-title" style="font-size: 30px;"></h3>
                        <p id="info-text"></p>

                        <div class="row" style="padding-top:30px;">
                        </div>

                        <div class="row" style="padding-top:30px;">
                            <div class="col-lg-6 col-md-6 mb-sm-30" style="z-index:1;">
                                <button id="info_option_1" type="button" class="btn-main btn-fullwidth"
                                        data-bs-dismiss="modal">Close
                                </button>
                            </div>
                            <div class="col-lg-6 col-md-6 mb-sm-30" style="z-index:1;">
                                <button id="info_close" type="button" class="btn btn-fullwidth"
                                        style="background: #c0c0c0;" data-bs-dismiss="modal" aria-label="Close">Close
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>

<?php include 'footermm.php'; ?>