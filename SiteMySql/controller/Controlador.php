<?php
$botao = strtolower(trim($_GET["b1"]));

switch($botao){
    case 'gravar':
        header("Location: ..\\view\Gravar.php?txtNome=".$_GET["txtNome"]."&txtIdade=".$_GET["txtIdade"]);
        break;
    case 'listar':
            header("Location: ..\\view\Listar.php");
        break;
    case 'remover':
            header("Location: ..\\view\Remover.php?txtCodigo=".$_GET["txtCodigo"]);
        break;        
    case 'alterar':
        //passar campos via sessão
            session_start(); //inicia a sessão e viabiliza a $_SESSION
            $_SESSION['codigo']=$_GET['txtCodigo'];
            $_SESSION['nome']=$_GET['txtNome'];
            $_SESSION['idade']=$_GET['txtIdade'];
            header("Location: ..\\view\Alterar.php");
        break;

}
