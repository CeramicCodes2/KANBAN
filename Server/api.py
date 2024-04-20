
from flask import Flask,jsonify,request
from flask_cors import CORS
from json import loads
from base64 import b64encode
from string import printable
from secrets import choice
app = Flask(__name__)
CORS(app)

CREDENTIAL_ERROR = {'content':'logging error bad content'}
users_list = {
  'ivan':{'password':'12345'}
}
k_users = users_list.keys()
ac_users:dict[str,str] = {}
def generateToken(user:str) -> str:
  ''' this method will generate a temporal token '''
  rsp = str(b64encode(b''.join([ choice(printable).encode('utf-8') for x in range(0,25)])))
  ac_users[user] = rsp
  return rsp
@app.route('/auth')
def authPublic():
  return 'Hello!'
@app.route('/auth',methods=['POST'])
def auth():
  # checamos datos en formato json incluidos en el cabebcero
  inf = request.json
  # se usa request.json para aceptar los datos que el ususario manda en el cuerpo http como json
  if not(inf['user'] in k_users):
    return CREDENTIAL_ERROR
  print(users_list[inf['user']]['password'] == inf['password'])
  if not(users_list[inf['user']]['password'] == inf['password']):
    return CREDENTIAL_ERROR
  return jsonify({"content":'sucress!','secret':generateToken(inf['user'])})
@app.route('/store/<string:activitys>',methods=['PUT'])
def saveActs(activitys:str):
  '''
  {
    'user':'ivan',
    'token':'token',
    'acts':[
      ...
    ]
  }
  por cada ususario se creara un documento
  '''
  request.json

  ...


if __name__ == '__main__':
  app.run(host='0.0.0.0',port='8080',debug=True)
