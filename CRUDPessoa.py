import pickle
from datetime import date, datetime
from os import system


class Pessoa:
    def __init__(self):
        self.__nome=""
        self.__dataNasc=date.today()
        self.__altura=0
        self.__peso=0
    def setNome(self,n):
        if len(n)>1:
            self.__nome=n
        else:
            raise Exception("Nome muito pequeno.")#dispara a exceção exception,
            # que é a mais geral
    def getNome(self):
        return self.__nome

    def setDataNasc(self,d):
        try:
            data = datetime.strptime(d,'%d/%m/%Y')#converte uma string em uma data
            if data.year >1900:
                self.__dataNasc=data
            else:
                raise Exception("Data inválida, deve ser maior que 1900")
        except Exception as erro:
            raise Exception("Erro no setDataNasc : ", erro)
    def getDataNasc(self):
        return self.__dataNasc.strftime('%d/%m/%Y') #converte a data para string dia/mês/ano

    def setAltura(self,a):
        try:
            aux=0
            if type(a) is float or type(a) is int:
                aux=a
            else:
                aux=float(a)
            if aux > 0:
                self.__altura=aux
            else:
                raise Exception("Erro no setAlturam o valor deve sere > que 0")
        except Exception as erro:
            raise Exception("Erro no setAltura: ", erro)
    def getAltura(self):
        return self.__altura

    def setPeso(self,p):
        try:
            if type(p) is str:  #testa o peso para ser string
                self.__peso=float(p)
            else:
                self.__peso=p
        except Exception as erro:
            raise Exception("Erro no setPeso: ", erro)

    def getPeso(self):
        return self.__peso

    def idade(self):

        i=date.today().year - self.__dataNasc.year
        if ((date.today().month < self.__dataNasc.month) or
            ((date.today().month ==self.__dataNasc.month) and
             (date.today().day < self.__dataNasc.day))):
            i=i-1
        return i
    def imc(self):
        return (self.__peso/(self.__altura*self.__altura))

########################## Funções de acesso ao disco ############
def ler():
    try:
        f=open('pessoa.pickle','rb')# r-> read b-> binary
        lista = pickle.load(f) #deserializa o arquivo para a lista
    except Exception as erro:
        lista=list()
    finally:
        return(lista)

def gravar(lista):
    try:
        f=open('pessoa.pickle','wb')# w-> cria o arquivo para escrita
        pickle.dump(lista,f) #serializa a lista
    except Exception as erro:
        print("Erro ao gravar: ", erro)
######################## Código Principal #######
op=-1
lista=ler()
while op!=5:
    print("1 - Incluir")
    print("2 - Listar")
    print("3 - Remover")
    print("4 - Alterar")
    print("5 - Sair")
    try:
        op=int(input("Digite sua opção -> "))
    except:
        op=2
    if op==1:
        try:
            obj = Pessoa() # instancia um objeto da classe
            aux=input("Digite o nome: ")
            obj.setNome(aux)
            aux=input("Digite sua data de nascimento dd/mm/aaaa : ")
            obj.setDataNasc(aux)
            aux=input("Digite a altura: ")
            obj.setAltura(aux)
            aux=input("Digite o peso: ")
            obj.setPeso(aux)
            lista.append(obj)
            print("Incluido com sucesso.")
            print("Nome: ", obj.getNome(), " Data de nascimento: ", obj.getDataNasc(), " Peso: ",
                  obj.getPeso(),
                  " Altura: ", obj.getAltura(), " Idade: ", obj.idade(), " IMC = ", obj.imc())
            system("pause") # espera um tecla
        except Exception as erro:
            print("Erro no incluir -> ",erro)
    if op==2:
        print("Pessoa Cadastradas")
        for i in range(len(lista)):
            print("Pos: ", i," Nome: ",lista[i].getNome()," Data de nascimento: ", lista[i].getDataNasc()," Peso: ",
    lista[i].getPeso()," Altura: ", lista[i].getAltura(), " Idade: ", lista[i].idade(), " IMC = ", lista[i].imc())
        system("pause")
    if op==3:
        try:
            pos=int(input("Digite a posição da lista a ser alterada: "))
            if( pos >=0 and pos <len(lista)):
                del lista[pos]
              #  obj1=lista[pos]
              #  lista.remove(obj1)
            else:
                print("Posição inválida.")
        except Exception as erro:
            print("Erro no remover: ", erro)
    if op ==4:
        try:
            pos = int(input("Digite a posição da lista a ser removida: "))
            obj = lista[pos]
            aux=input("Digite o nome: ")
            obj.setNome(aux)
            aux=input("Digite sua data de nascimento dd/mm/aaaa : ")
            obj.setDataNasc(aux)
            aux=input("Digite a altura: ")
            obj.setAltura(aux)
            aux=input("Digite o peso: ")
            obj.setPeso(aux)
            print("Alterado com sucesso.")
            system("pause") # espera um tecla
        except Exception as erro:
            print("Erro no incluir -> ",erro)
gravar(lista)