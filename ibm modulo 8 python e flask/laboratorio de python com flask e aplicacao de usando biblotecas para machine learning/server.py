from flask import Flask, render_template, request
from SentimentAnalysis.sentiment_analysis import sentiment_analyzer
app = Flask("Sentiment Analyzer")


@app.route("/sentimentAnalyzer")
def sent_analyzer():
    # Recupera o texto a ser analisado dos argumentos da requisição
    text_to_analyze = request.args.get('textToAnalyze')

    # Passa o texto para a função sentiment_analyzer e armazena a resposta
    response = sentiment_analyzer(text_to_analyze)

    # Extrai o rótulo e a pontuação da resposta
    label = response['label']
    score = response['score']

    if label is None : 
        return "Entrada invalidade tente novamente sucker and socker"
    else:    # Retorna uma string formatada com o rótulo e a pontuação do sentimento
        return "O texto fornecido foi identificado como {} com uma pontuação de {}.".format(label.split('_')[1], score)


@app.route("/")
def render_index_page():
    return render_template('index.html')


if __name__ == "__main__":
    #definindo a porta 5000
    app.run(host="0.0.0.0", port=5000)