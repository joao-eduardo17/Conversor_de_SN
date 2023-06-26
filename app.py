from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    return render_template ("index.html")

@app.route('/conversor', methods=['GET','POST'])
def conversor():
    return render_template ("conversor.html")

@app.route('/sobre')
def sobre():
    return render_template ("sobre.html")