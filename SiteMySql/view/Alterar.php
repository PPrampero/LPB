<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title> Primeiro Site PHP </title>
    </head>
    <body>
        <?php
        include("..\\controller\\ClienteDAO.php");

        //cria ou captura a sessao
        session_start();
        //$_SESSION['codigo'] -> pega o campo codigo da sessao.
        if(isset($_SESSION['codigo'])) { //isset -> verifica se recebeu algo
            $dao = new ClienteDAO();
            $obj = new Cliente();
            $obj->setCodigo($_SESSION['codigo']);
            $obj->setNome($_SESSION['nome']);
            $obj->setIdade($_SESSION['idade']);
            $r = $dao->alterar($obj);
        
            if($r>0){
                echo $obj->getNome()." alterado com sucesso."; 
            }
            else{
                echo "Nada foi alterado."; 
            }
        }
        else
            echo 'Dados não foram recebidos.';

        session_destroy(); //apaga tudo da sessão    
        ?>
    </body>
</html>    