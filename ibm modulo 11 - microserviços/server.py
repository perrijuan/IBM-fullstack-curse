# Importa a classe Flask do módulo flask
from flask import Flask  

# Cria uma instância do Flask
app = Flask(__name__)  

# Define uma rota para a URL raiz ('/')
@app.route("/")
def hello():
    return "Hello World!"  

# Executa o servidor Flask se o script for executado diretamente
if __name__ == "__main__":
    app.run(debug=True)  # Inicia o servidor no modo debug (porta 5000 por padrão)
