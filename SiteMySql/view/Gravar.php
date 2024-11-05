<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title> Primeiro Site PHP </title>
</head>

<body>
    <?php
    include("..\\controller\\ClienteDAO.php");
    $dao = new ClienteDAO();
    $obj = new Cliente();

    $obj->setNome($_GET['txtNome']);
    $obj->setIdade($_GET['txtIdade']);
    $r = $dao->gravar($obj);

    if ($r > 0) {
        echo $obj->getNome() . " salvo com sucesso.";
    } else {
        echo "Nada foi salvo.";
    }
    ?>
</body>

</html>