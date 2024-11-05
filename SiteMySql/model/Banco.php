<?php
class Banco{
    public $conexao;

    //construtor
    function __construct(){
        $host="localhost";
        $base="lpb";
        $user="root";
        $senha="ifsp";

        //conexao com o banco
        $this->conexao = mysqli_connect($host,$user,$senha,$base);
        if( !$this->conexao){
            die("Conexão falhou: " . mysqli_connect_error());
        }

    }
}