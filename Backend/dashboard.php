<?php
session_start();

// Verifica se o usuário está logado
/*if (!isset($_SESSION['id'])) {
    // Redireciona para o login se não estiver logado
    header("Location: verificar_login.php");
    exit;
}*/
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
</head>
<body>

    <h1>Bem-vindo ao seu Dashboard</h1>
    <p>Olá, <?php echo $_SESSION['cnpj']; ?>! Você está logado.</p>

    <a href="logout.php">Sair</a>

</body>
</html>
