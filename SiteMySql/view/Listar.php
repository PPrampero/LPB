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

        $tabela = $dao->listar();
        if($tabela){
            echo " <h1> Lista de Clientes </h1><br/>";
            while($linha = mysqli_fetch_array($tabela)){
                echo "Codigo: $linha[0] Nome: $linha[1] Idade: $linha[2] <br/>";
            }
        }
        else
            echo "Tabela vazia.";
        ?>
    </body>
</html>    