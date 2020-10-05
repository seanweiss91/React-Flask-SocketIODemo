import os
import flask
import flask_socketio

app = flask.Flask(__name__)
socketio = flask_socketio.SocketIO(app)
socketio.init_app(app, cors_allowed_origins="*")

groceryList = []

@socketio.on('addItem')
def on_new_message(data):
    global groceryList
    print("Got an event for new message with contents:", data)
    if data["item"] not in groceryList:
        groceryList.append(data["item"])
        responseData = {'message': 'addedItem', 'groceryList': groceryList}
        socketio.emit('newMessage', responseData)
    else:
        responseData = {'message': 'duplicate'}
        socketio.emit('newMessage', responseData)
        
@socketio.on('disconnect')
def on_disconnect():
    global groceryList
    groceryList = []
    
@app.route('/')
def hello():
    return flask.render_template('index.html')

# app.run(
#     host=os.getenv('IP', '0.0.0.0'),
#     port=int(os.getenv('PORT', 8080)),
#     debug=True
# )

socketio.run(
        app,
        host=os.getenv('IP', '0.0.0.0'),
        port=int(os.getenv('PORT', 8080)),
        debug=True
    )