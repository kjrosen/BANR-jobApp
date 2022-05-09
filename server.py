from flask import Flask, render_template

app = Flask(__name__)

app.secret_key = '2134ds567dsf8909gs87654'


@app.route('/')
def homepage():
    '''homepage of the app'''

    return render_template('base.html')

