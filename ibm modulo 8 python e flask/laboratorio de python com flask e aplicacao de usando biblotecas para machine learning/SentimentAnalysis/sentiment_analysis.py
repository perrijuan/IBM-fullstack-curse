import requests
import json

def sentiment_analyzer(text_to_analyse):
    # Defina a URL para a API de análise de sentimentos
    url = 'https://sn-watson-sentiment-bert.labs.skills.network/v1/watson.runtime.nlp.v1/NlpService/SentimentPredict'

    # Crie a carga útil com o texto a ser analisado
    myobj = { "raw_document": { "text": text_to_analyse } }

    # Defina os cabeçalhos com o ID do modelo necessário para a API
    header = {"grpc-metadata-mm-model-id": "sentiment_aggregated-bert-workflow_lang_multi_stock"}

    # Faça uma solicitação POST para a API com a carga útil e os cabeçalhos
    response = requests.post(url, json=myobj, headers=header)

    # Analise a resposta da API
    formatted_response = json.loads(response.text)

    # Se o código de status da resposta for 200, extraia o label e o score da resposta
    if response.status_code == 200:
        label = formatted_response['documentSentiment']['label']
        score = formatted_response['documentSentiment']['score']
    # Se o código de status da resposta for 500, defina label e score como None
    elif response.status_code == 500:
        label = None
        score = None

    # Retorne o label e o score em um dicionário
    return {'label': label, 'score': score}