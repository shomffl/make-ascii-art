import time
from flask import Flask, request
from werkzeug.utils import secure_filename
from api.convert_filename import Kakasi
from api.resize import ResizeImage
from api.make import MakeGrayFrame
import os

app = Flask(__name__, static_folder="../frontend/build/", static_url_path="")

DOWNLOAD_PATH = "../frontend/build/static/images/download_images/"
ASCII_PATH = "../frontend/build/static/images/ascii_images/"

@app.route('/home')
def get_current_time():
    return {'time': time.time()}

@app.route("/make", methods=["POST"])
def make_ascii_art():
    if request.method == "POST":
        data = request.files["file"]
        ascii_name = Kakasi.japanese_to_ascii(data.filename)
        filename = secure_filename(ascii_name)
        filepath = os.path.join(DOWNLOAD_PATH, filename)
        data.save(filepath)

        resize = ResizeImage(f"{DOWNLOAD_PATH}{filename}",DOWNLOAD_PATH)
        resize.resize_image()

        make = MakeGrayFrame(f"{DOWNLOAD_PATH}newimage.png", ASCII_PATH)
        make.make_gray()

        return {"name": "image.png"}

@app.route("/create_folder", methods=["GET"])
def create_folder():
    if request.method=="GET":
        BASE_PATH = "../frontend/build/static/images/"
        image_folder_exist = os.path.exists(BASE_PATH)

        if image_folder_exist == False:
            os.mkdir(f"{BASE_PATH}ascii_images")
            os.mkdir(f"{BASE_PATH}download_images")
        else:
            pass

        return {"message" : "foloder was maked"}


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


if __name__ == '__main__':
    app.run()
