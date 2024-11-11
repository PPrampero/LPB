const Banco = require('../model/Banco')
const Pessoa = require('../model/Pessoa')

module.exports = class PessoaDAO {
  async gravar(obj) {
    try {
      Banco.init();
      const res = await Banco.conexao.query(
        'INSERT INTO pessoa(nome,idade,peso) VALUES($1,$2,$3) RETURNING codigo', [obj.nome, obj.idade,obj.peso]);
      Banco.conexao.end();
      return res.rows[0].codigo
    }
    catch (erro) {
      console.log(erro);
    }
  }

  async alterar(obj) {
    try {
      Banco.init();
      let res = await Banco.conexao.query('Update pessoa set nome=$1,idade=$2,peso=$3 where codigo=$4', [obj.nome, obj.idade,obj.peso, obj.codigo]);
      Banco.conexao.end();
      return res.rowCount
    }
    catch (erro) {
      console.log(erro);
    }

  }

  async remover(obj) {
    try {
      Banco.init();
      let res = await Banco.conexao.query('Delete from pessoa where codigo = $1', [obj.codigo]);
      Banco.conexao.end();
      return res.rowCount
    }
    catch (erro) {
      console.log(erro);
    }
  }

  async listar() {
    try {
      Banco.init();
      let tabela = await Banco.conexao.query('Select codigo, nome, idade, peso from pessoa order by 1 desc');
      Banco.conexao.end();
      return tabela
    }
    catch (erro) {
      console.log(erro);
    }
  }

  async buscarCodigo(objP) {
    try {
      let obj = null
      Banco.init();
      let tabela = await Banco.conexao.query('Select codigo, nome, idade, peso from pessoa where codigo=$1 order by nome',[objP.codigo]);
      Banco.conexao.end();
      if ((tabela != null) && (tabela.rowCount > 0)) {
        obj = new Pessoa()
        obj.codigo=tabela.rows[0].codigo
        obj.nome=tabela.rows[0].nome
        obj.idade=tabela.rows[0].idade
        obj.peso=tabela.rows[0].peso
      }
      return obj
    }
    catch (erro) {
      console.log(erro);
    }
  }


}