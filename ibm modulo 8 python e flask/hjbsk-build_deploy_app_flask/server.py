from flask import Flask, render_template, request
# Import the Maths package here
from Maths.matematica import summation, subtraction, multiplication

app = Flask("Mathematics Problem Solver")

@app.route("/sum")
def sum_route():
    num1 = float(request.args.get('num1'))
    num2 = float(request.args.get('num2'))
    # Write your code here
    resultado = summation(num1, num2)
    return str(resultado)


@app.route("/sub")
def sub_route():
    num1 = float(request.args.get('num1'))
    num2 = float(request.args.get('num2'))
    # Write your code here
    resultado = subtraction(num1, num2)
    return str(resultado)

@app.route("/mul")
def mul_route():
    num1 = float(request.args.get('num1'))
    num2 = float(request.args.get('num2'))
    # Write your code here
    resultado = multiplication(num1, num2)
    return resultado  

@app.route("/")
def render_index_page():
    # Write your code here
        return render_template('index.html')


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
