import time
from flask import Flask

app = Flask(__name__, static_folder="../frontend/build/", static_url_path="")

@app.route('/home')
def get_current_time():
    return {'time': time.time()}
