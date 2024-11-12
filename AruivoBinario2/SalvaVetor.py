import pickle # pacote que serializa e deserializa dados
from os import system

def ler():
    try:
        f=open('dados.pickle','rb')# r-> read b-> binary
        lista = pickle.load(f) #deserializa o arquivo para a lista
    except Exception as erro:
        lista=list()
    finally:
        return(lista)

def gravar(lista):
    try:
        f=open('dados.pickle','wb')# w-> cria o arquivo para escrita
        pickle.dump(lista,f) #serializa a lista
    except Exception as erro:
        print("Erro ao gravar: ", erro)
######################## Código Principal #######
lista = ler()
op=-1
while op != 3:
    print("1 - Incluir")
    print("2 - Mostrar")
    print("3 - Sair")
    op=int(input("Opção -> "))
    if op ==1:
        n=int(input("Digite um valor: "))
        lista.append(n)
        print("Incluido com sucesso")
        system("pause")
    if op==2:
        print(lista)
        system("pause")
print("Fim")
gravar(lista)



