<?php
class Cliente {
    private $codigo;
    private $nome;
    private $idade;

    public function setCodigo($c){
        $this->codigo=$c;
    }
    public function getCodigo(){
        return $this->codigo;
    }
    public function setNome($n){
        $this->nome=$n;
    }
    public function getNome(){
        return $this->nome;
    }
    public function setIdade($i){
        $this->idade=$i;//settype($i,"integer");
    }
    public function getIdade(){
        return $this->idade;
    }
}
?>
