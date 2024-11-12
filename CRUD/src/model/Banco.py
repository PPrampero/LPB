# pip install "psycopg[binary]"
import psycopg

class Banco:
    def __init__(self):
        try:
            self.__conexao =  psycopg.connect(
                        host="127.0.0.1",
                        dbname="LPB",
                        user="postgres",
                        password="ifsp",
                        port=5432
                        )
            self.__cursor = self.__conexao.cursor()
        except Exception as erro:
            raise Exception(" Erro na conexao com o banco "+ str(erro))

    @property
    def conexao(self):
        return self.__conexao

    @property
    def cursor(self):
        return self.__cursor
  