// npm i express
const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const Pessoa=require('./src/model/Pessoa')
const PessoaDAO=require('./src/controller/PessoaDAO')
// cors -> (Cross-Origin Resource Sharing) -> compartilha requisições de várias origens
// npm i cors
const cors = require('cors');


// configurações para dentro do servidor express, adicionando middlewares (body-parser, morgan, cors)
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

var registro = {
    codigo: "1",
    nome: "Prampero",
    idade: "50",
    peso:'100'
};

app.get("/pessoa", async function (req, res) {
    try {
        let s=""
        dao = new PessoaDAO()
        let tabela = await dao.listar()
        v= new Array()
        for (i = 0; i < tabela.rowCount; i++){
            v.push({
                codigo: tabela.rows[i].codigo,
                nome:tabela.rows[i].nome,
                idade: tabela.rows[i].idade,
                peso: tabela.rows[i].peso
            })
        }
        return res.json(v);
    }
    catch (erro) {
        console.log("Erro get -> "+ erro)
    }
          
});

app.get("/pessoa/:id",async function (req,res){
    const { id } = req.params;
    let obj = new Pessoa()
    
    try {
        dao = new PessoaDAO()
        obj.codigo=parseInt(id)
        let obj1 = await dao.buscarCodigo(obj)
        if(obj1!=null)
            return res.json({
                codigo: obj1.codigo,
                nome:obj1.nome,
                idade: obj1.idade,
                peso:obj1.peso
            });
        else
        return res.json({
            codigo: 0,
            nome:"Não encontrado",
            idade: 0
        });
    }
    catch (erro) {
        console.log("Erro get/id -> "+ erro)
    }
     
});

app.post("/pessoa",async function (req,res){
    const dados = req.body;
    try {
        let obj = new Pessoa()
        obj.codigo=dados.codigo
        obj.nome=dados.nome
        obj.idade = dados.idade
        obj.peso = dados.peso
        let dao = new PessoaDAO()
        await dao.gravar(obj)
        return res.json('Salvo com sucesso');
    }
    catch (erro) {
        console.log("Erro post -> "+ erro)
    }
    

});

app.put("/pessoa",async function (req,res){
    const dados = req.body;
    try {
        let obj = new Pessoa()
        obj.codigo=dados.codigo
        obj.nome=dados.nome
        obj.idade = dados.idade
        obj.peso = dados.peso
        let dao = new PessoaDAO()
        await dao.alterar(obj)
        return res.json('Alterado com sucesso');
    }
    catch (erro) {
        console.log("Erro put -> "+ erro)
    }

});

app.delete("/pessoa",async function (req,res){
    const dados = req.body;
    
    try {
        let obj = new Pessoa()
        obj.codigo=dados.codigo
        let dao = new PessoaDAO()
        await dao.remover(obj)
        return res.json('Removido com sucesso');
    }
    catch (erro) {
        console.log("Erro delete -> "+ erro)
    }
  
});

app.listen(3000, function (erro){
    if(erro)
        console.log("Erro: "+ erro);
    else
        console.log("API rodando na porta 3000");
})