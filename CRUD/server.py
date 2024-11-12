#flask --app server run  --debug --port=3000  
from flask import Flask,render_template,request
from src.model.Cliente import Cliente
from src.controller.ClienteDAO import ClienteDAO

#app = Flask(__name__)
app = Flask(__name__, template_folder='templates')#templates default=templates
if __name__ == "__main__":
    app.run()

@app.route("/")
def hello_world():
    return render_template('index.html') #index.html deve estar na pasta templates
    #return "<p>Olá mundo! Prampero</p>"
    
@app.route('/cad', methods=['POST', 'GET'])
def processaCad():
    try:
        botao = str(request.form['b1']).strip().lower()
        if botao=='gravar':
            cliente = Cliente()
            cliente.setNome(request.form['txtNome'])
            cliente.setIdade(request.form['txtIdade'])
            dao = ClienteDAO()
            cliente.codigo=int(dao.gravar(cliente))
            return "<h1>"+ cliente.getNome() +" salvo com sucesso com código = "+str(cliente.codigo)+"</h1>"
        elif botao=='alterar':
            cliente = Cliente()
            cliente.codigo=request.form['txtCodigo']
            cliente.setNome(request.form['txtNome'])
            cliente.setIdade(request.form['txtIdade'])
            dao = ClienteDAO()
            dao.alterar(cliente)
            return "<h1>"+ cliente.getNome() +" alterado com sucesso.</h1>"
        if botao=='remover':
            cliente = Cliente()
            cliente.codigo=request.form['txtCodigo']
            dao = ClienteDAO()
            dao.remover(cliente)
            return "<h1> Removido com sucesso.</h1>"
        elif botao=='listar':
            dao = ClienteDAO()
            tabela= dao.listar()
            return render_template('tabela.html',data=tabela)  #template Jinja2

            #s="<h1> Lista de cadastrados </h1>"
            #for reg in tabela:
            #    s=s+"<h3>"+str(reg[0])+" "+ reg[1]+" "+str(reg[2])+"</h3>" 
            #return s
        else:
            return "<h1> Evento :"+botao+"  não tratado.</h1>"
    except Exception as erro:
        app.logger.error("Erro no /cad -> "+str(erro))