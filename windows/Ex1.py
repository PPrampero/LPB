import tkinter as tk
# Função para capturar o input
def capturar_input():
    input_texto = entrada.get()
    print("Texto capturado:", input_texto)

def rodaBotao():
    t= entrada.get()
    t=str(t).strip()
    if len(t)>0:
        label.config(text=t)
    else:
        label.config(text="Vazio.")
###############################################################################################
# Cria a janela principal
root = tk.Tk()
root.title("Minha Interface Gráfica")
# Define a fonte
fonte_grande = ("Arial", 24)

# Define o tamanho da janela (largura x altura)
root.geometry("800x600")
root.config(bg="green")

lblNome = tk.Label(root, text="Digite um nome: ", font=fonte_grande)
lblNome.grid(row=0, column=0)
#lblNome.pack() #pack coloca um embaixo do outro.
# Cria um campo de entrada (Entry)
entrada = tk.Entry(root,font=fonte_grande,width=30,bg="cyan", fg="red")
entrada.grid(row=0, column=1)
#entrada.pack()
l1 = tk.Label(root, text="")
l1.grid(row=1, column=0)
# Cria um rótulo (label)
label = tk.Label(root, text="Olá, Mundo!",font=fonte_grande)
label.grid(row=2, column=1)
#label.pack()
l2 = tk.Label(root, text="")
l2.grid(row=3, column=0)

# Cria um botão
button = tk.Button(root, text="OK", font=fonte_grande, command=rodaBotao )
button.grid(row=4, column=1)
#button.pack()

# Inicia o loop principal
root.mainloop()

