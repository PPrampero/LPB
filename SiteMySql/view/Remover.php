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

        $obj->setCodigo($_GET['txtCodigo']);
        
        $r = $dao->remover($obj);
        
        if($r>0){
            echo $obj->getNome()." removido com sucesso."; 
        }
        else{
            echo "Nada foi removido."; 
        }
        ?>
    </body>
</html>    