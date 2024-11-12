#flask --app server run  --debug --port=3000  

#cria a aplicação
from flask import Flask, render_template


app = Flask(__name__)

if __name__ == "__main__":
    app.run()

@app.route("/")
def trataRaiz():
    return render_template("index.html")

