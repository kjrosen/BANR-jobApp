from flask import Flask, render_template
import jinja2

app = Flask(__name__)

app.secret_key = '2134ds567dsf8909gs87654'


@app.route('/')
def homepage():
    '''homepage of the app'''

    return render_template('home.html')

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")