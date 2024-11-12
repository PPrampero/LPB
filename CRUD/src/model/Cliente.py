class Cliente:
    def __init__(self):
        self.__codigo=0 ## __ indica que o atributo é private
        self.__nome="a"
        self.__idade=0

    @property #pode utilizer annotation para acessar os atributos OU os metodos get e set
    def codigo(self):
        return self.__codigo
    
    @codigo.setter
    def codigo(self,c):
        c= int(c)
        if c>=1:
            self.__codigo=c
        else:
            raise Exception("Código deve ser maior que zero.")#dispara a exceção exception,
            # que é a mais geral
  
    
    def setNome(self,n):
        if len(n)>1:
            self.__nome=n
        else:
            raise Exception("Nome muito pequeno.")#dispara a exceção exception,
            # que é a mais geral
    def getNome(self):
        return self.__nome
    
    def setIdade(self,i):
        i = int(i)
        if i>=1 and i<=140:
            self.__idade=i
        else:
            raise Exception("A idade deve estar entre [1,140].")
    def getIdade(self):
        return self.__idade

        