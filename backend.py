# problem : backend applition
# version : python 3.8
# package : pip install flask
#           pip install pymysql
#           pip install os
#           pip install datetime
#           pip install bcrypt

from flask import Flask, jsonify, request, session
import os
from datetime import timedelta
import bcrypt
import pymysql.cursors

secretKey = os.urandom(24)
app = Flask(__name__)
app.config['SECRET_KEY'] = secretKey
app.config['PERMAENT_SESSION_LIFETIME'] = timedelta(days = 31) #expiry date = date + 31

#db = pymysql.connect(host = 'localhost', user = 'root', password = '', db = 'user', charset = 'utf8mb4',cursorclass = pymysql.cursors.DictCursor)
# mysql
# username : root
# password : no
# IP : localhost
# port : 3306
# name : user 

        
def crypt(target):
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(target.encode('utf-8'),salt)

@app.route('/hello',methods = ['GET'])
def hello():
    return 'Hello World'

@app.route('/sortnum',methods = ['POST'])
def sortnum():
    requestData = request.get_json()
    nums = requestData['nums']
    nums.sort()
    return jsonify(nums = nums)

@app.route('/login', methods = ['POST'])
def login():
    requestData = request.get_json()
    if('username' not in requestData or 'password' not in requestData):
        return 'invalid input'
    
    _username = str(requestData['username'])
    _password = str(requestData['password'])
    
    try:
        db = pymysql.connect(host = 'localhost', user = 'root', password = '', db = 'user', charset = 'utf8mb4',cursorclass = pymysql.cursors.DictCursor) #connect to database
        with db.cursor() as cursor:
            cursor.execute(" SELECT * FROM user")
            res = cursor.fetchall()
            
    finally:
        db.close() #close
        
    for element in res:
        
        if element['username'] == _username :
            
            if element['password'] == _password :
                session['accesstoken'] = str(crypt(_username+':'+_password))
                session.permanent = True # invalid after 31 days if set true
                accesstoken = session['accesstoken']
                return jsonify(accesstoken = accesstoken)
            
            else :
                return 'wrong username or wrong password'
            
    return 'wrong username or wrong password'

@app.before_request
def middleware():
    if request.endpoint == 'is_auth':
        if(not session.get('accesstoken', 'not set')):
            return 'token has expired'
        if('accesstoken' in request.headers):
            if request.headers['accesstoken'] != session['accesstoken']: 
                return 'invalid accesstoken'
        else :
            return 'without accesstoken'
   
@app.route('/is_auth', methods = ['GET'])
def is_auth():
    return 'True'

if __name__ == "__main__":
    app.run(port=3000)