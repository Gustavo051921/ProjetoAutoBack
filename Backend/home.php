<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/ProjetoAutoFront/front_css/index.css">
    <link rel="shortcut icon" href="/ProjetoAutoFront/front_img" type="image/x-icon">
    <title>EixoAutopeças</title>
</head>

<body>

    <header>
        <nav>
            <div id="logo">
                <img src="/ProjetoAutoFront/front_img/Icons/Logo E branca real.png" alt="Logo EixoAutopeças">
            </div>

            <div id="header-content">
                <div id="pesquisa">
                    <input placeholder="Buscar..." type="text">
                </div>

                <ul>
                    <li><a href="/ProjetoAutoFront/front_jheniffer/footer.html">Sobre</a></li>
                    <li><a href="/ProjetoAutoFront/front_jheniffer/footer.html">Contato</a></li>
                    <li><a href="/ProjetoAutoBack/Backend/verificar_login.php">Login</a></li>
                    <li><a href="/ProjetoAutoBack/Backend/cadastro.php">Cadastro</a></li>
                </ul>
            </div>

            <div class="icon">
                <ul id>
                    <li>
                        <a href="/ProjetoAutoFront/front_jheniffer/carrinho.html">
                            <img class="icons" src="/ProjetoAutoFront/front_img/Icons/carrinho branco .png" alt="Carrinho">
                        </a>
                    </li>
                    <li>
                        <a href="/ProjetoAutoFront/front_jheniffer/favoritos.html">
                            <img class="icons" src="/ProjetoAutoFront/front_img/Icons/heart.png" alt="Favoritos">
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

    <div class="banner">
        <img src="/ProjetoAutoFront/front_img/Propagandas/banner-1.png" alt="">
    </div>

    <div class="container">
        <div class="box">
            <div class="cards">
                <img class="prop" src="/ProjetoAutoFront/front_img/Propagandas/propaganda1.svg" alt="propaganda">
                <img class="prop" src="/ProjetoAutoFront/front_img/Propagandas/propaganda1.svg" alt="propaganda">
                <img class="prop" src="/ProjetoAutoFront/front_img/Propagandas/propaganda2.svg" alt="propaganda">
                <img class="prop" src="/ProjetoAutoFront/front_img/Propagandas/propaganda4.svg" alt="propaganda">
            </div>
        </div>
        

        <div class="container-slide">
            <div class="carousel-slide" id="slider">
              <img class="slides" src="/ProjetoAutoFront/front_img/Propagandas/propaganda-LongPage.png" alt="">
              <img class="slides" src="/ProjetoAutoFront/front_img/Propagandas/propaganda4.svg" alt="">
              <img class="slides" src="/ProjetoAutoFront/front_img/Propagandas/propaganda-LongPage.png" alt="">
            </div>
            <button  class="btn" id="prev">&#10094;</button>
            <button  class="btn" id="next">&#10095;</button>
        </div>

        <div class="collum">
            <div class="products2"></div>
            <div class="products3"></div>
        </div>

        <div class="collum">
            <div class="products3"></div>
            <div class="products2"></div>
        </div>


        <div class="collum">
            <img class="suppliers" src="/ProjetoAutoFront/front_img/Fornecedores/LF.png" alt="logo de empresa fornecedora">
            <img class="suppliers" src="/ProjetoAutoFront/front_img/Fornecedores/MX Turbo.png" alt="logo de empresa fornecedora">
            <img class="suppliers" src="/ProjetoAutoFront/front_img/Fornecedores/TruxMecanina.png" alt="logo de empresa fornecedora">
            <img class="suppliers" src="/ProjetoAutoFront/front_img/Fornecedores/TruckFIX.png" alt="logo de empresa fornecedora">
            <img class="suppliers" src="/ProjetoAutoFront/front_img/Fornecedores/Laranja.png" alt="logo de empresa fornecedora">
            <img class="suppliers" src="/EixoAuto/img/Fornecedores/" alt="logo de empresa fornecedora">
        </div>

    </div>

    <script src="/ProjetoAutoFront/front_js/index.js"></script>
</body>

</html>