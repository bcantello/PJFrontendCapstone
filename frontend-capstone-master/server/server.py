from flask import Flask, g, jsonify, json, request
from wtforms import Form, StringField, validators
from werkzeug.datastructures import ImmutableMultiDict
from flask_cors import CORS
from datetime import datetime

import sqlite3
import os

DATABASE = "./database.db"

# Create app
app = Flask(__name__)
CORS(app)
app.config['DEBUG'] = True
app.config['SECRET_KEY'] = 'super-secret'

# check if the database exist, if not create the table and insert a few lines of data
if not os.path.exists(DATABASE):
    conn = sqlite3.connect(DATABASE)
    cur = conn.cursor()
    cur.execute(
        "CREATE TABLE transactions (name TEXT, amount FLOAT, cardNumber INTEGER, cardExpMonth INTEGER, cardExpYear INTEGER, cardCvv INTEGER, created DATETIME);")
    conn.commit()
    cur.execute("INSERT INTO transactions VALUES('Mike', '12.99', '444433332222111', '12', '23', '123', '2007-01-01T10:00:00');")
    cur.execute("INSERT INTO transactions VALUES('Joe', '56.12', '5555444433332222', '10', '31', '456', '2007-02-01T10:00:00');")

    conn.commit()
    conn.close()


# helper method to get the database since calls are per thread,
# and everything function is a new thread when called
def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db


# helper to close
@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


@app.route("/transactions", methods=['GET', 'POST'])
def transactions():
    if request.method == 'POST':
        return createTransaction()
    else:
        return getTransactions()


def createTransaction():
    formData = ImmutableMultiDict(request.json)
    form = TransactionForm(formData)
    if form.validate():
        db = get_db()
        db.cursor().execute(
            "insert into transactions (name , amount, cardNumber, cardExpMonth, cardExpYear, cardCvv, created) values (?, ?, ?, ?, ?, ?, ?)",
            (request.json['name'],
             request.json['amount'],
             request.json['cardNumber'],
             request.json['cardExpMonth'],
             request.json['cardExpYear'],
             request.json['cardCvv'],
             datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%S")))
        db.commit()
        return "true"
    else:
        return jsonify(form.errors), 400


def getTransactions():
    cur = get_db().cursor()
    transactions = cur.execute("select * from transactions")

    json_transactions = []
    print(transactions)
    for transaction in transactions:
        json_transactions.append({
            'status': 'approved',
            'name': transaction[0],
            'amount': transaction[1],
            'created': transaction[6]
        })
    return jsonify({'transactions': json_transactions})


class TransactionForm(Form):
    name = StringField('name', [validators.Length(min=4, max=25)])
    amount = StringField('amount', [validators.DataRequired()])
    cardNumber = StringField('cardNumber', [validators.Length(min=14, max=19)])
    cardExpMonth = StringField('cardExpMonth', [validators.Length(min=2, max=2)])
    cardExpYear = StringField('cardExpYear', [validators.Length(min=2, max=2)])
    cardCvv = StringField('cardCvv', [validators.Length(min=3, max=3)])

if __name__ == "__main__":
    """
    Use python sqlite3 to create a local database, insert some basic data and then
    display the data using the flask templating.

    http://flask.pocoo.org/docs/0.12/patterns/sqlite3/
    """
    app.run()
