from ..model.Banco import Banco
class ClienteDAO:
    def __init__(self) -> None: #None indica que o método não retorna nada 
        pass                    #pass indica que o método não faz nada
    
    def gravar(self,obj):
        codigo=-1
        try:
            banco = Banco()
            banco.cursor.execute("insert into cliente(nome,idade) values(%s,%s) RETURNING codigo",[obj.getNome(), obj.getIdade()])
            codigo = banco.cursor.fetchone()[0]
            banco.cursor.close()
            banco.conexao.commit()
            return codigo
        except Exception as erro:
            raise Exception("Erro ao gravar: "+str(erro))
        
    def alterar(self,obj):
        try:
            banco = Banco()
            banco.cursor.execute("update cliente set nome=%s ,idade=%s where codigo= %s",[obj.getNome(), obj.getIdade(), obj.codigo])
            banco.cursor.close()
            banco.conexao.commit()
        except Exception as erro:
            raise Exception("Erro ao alterar: "+str(erro))
        
    def remover(self,obj):
        try:
            banco = Banco()
            banco.cursor.execute("delete from cliente where codigo = %s ",[obj.codigo])
            banco.cursor.close()
            banco.conexao.commit()
        except Exception as erro:
            raise Exception("Erro ao remover: "+str(erro))        

    def listar(self):
        tabela=0
        try:
            banco = Banco()
            banco.cursor.execute("Select codigo, nome, idade from cliente")
            tabela= banco.cursor.fetchall()
            banco.cursor.close()
            banco.conexao.commit()
            return tabela
        except Exception as erro:
            raise Exception("Erro ao gravar: ",erro)
