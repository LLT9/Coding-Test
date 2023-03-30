from datetime import datetime, timedelta
from flask import *
import sqlite3
import secrets

app=Flask(__name__, static_folder = "public", static_url_path = "/")
app.secret_key = "jdhsgejeehfjigyrhek"

DATABASE = "member.db"

@app.route("/hello")
def hello():
    return "Hello World"

@app.route("/sortnum", methods = ["POST"])
def sortnum():
    data = request.get_json()
    nums = data.get("nums")
    sorted_nums = sorted(nums)
    return jsonify({'sorted_nums': sorted_nums})

def authenticate(login, password):
    connect = sqlite3.connect(DATABASE)
    query = connect.cursor()
    query.execute("SELECT * FROM users WHERE login=%s AND password=%s", (login, password))
    user = query.fetchone()
    connect.close()
    return user

@app.route("/login", methods = ["POST"])
def login():
    data = request.get_json()
    login = data.get("login")
    password = data.get("password")

    if authenticate(login, password) == None:
        return jsonify({"error": "Invalid login or password"})

    token = secrets.token_hex(16)
    expiry_date = datetime.utcnow() + timedelta(days=1)

    session["token"] = token
    session["expiry_date"] = expiry_date.isoformat()

    return jsonify({"token": token})

@app.middleware
def middleware():
    if request.endpoint != 'login':
        if 'token' not in session:
            return jsonify({'error': 'Unauthorized access'})

        expiry_date_str = session.get('expiry_date')
        expiry_date = datetime.fromisoformat(expiry_date_str)
        if datetime.utcnow() > expiry_date:
            session.pop('token', None)
            session.pop('expiry_date', None)
            return jsonify({'error': 'Session expired'})
        
@app.route('/is_auth', methods=['GET'])
def is_auth():
    if 'token' in session:
        return jsonify({'is_auth': True})
    else:
        return jsonify({'is_auth': False})


app.run(port = 3000)