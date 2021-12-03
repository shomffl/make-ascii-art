from flask import Flask, request
from werkzeug.utils import secure_filename
from backend.convert_filename import Kakasi
from backend.resize import ResizeImage
from backend.make import MakeGrayFrame
import os
from dotenv import load_dotenv
import random
import string
import cloudinary
import cloudinary.uploader
load_dotenv


app = Flask(__name__, static_folder="frontend/build/", static_url_path="")



cloud_name = os.environ["CLOUDINARY_NAME"]
api_key = os.environ["CLOUDINARY_API_KEY"]
api_secret = os.environ["CLOUDINARY_SECRET"]

cloudinary.config(
    cloud_name = cloud_name,
    api_key = api_key,
    api_secret = api_secret
)
DOWNLOAD_PATH = "./frontend/build/static/images/download_images/"
ASCII_PATH = "./frontend/build/static/images/ascii_images/"


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

        #ファイル名にするランダム文字列を作成
        randlst = [random.choice(string.ascii_letters + string.digits) for i in range(8)]
        randstr = ''.join(randlst)

        make = MakeGrayFrame(f"{DOWNLOAD_PATH}newimage.png", ASCII_PATH, randstr)
        make.make_gray()

        res = cloudinary.uploader.upload(file=f"./frontend/build/static/images/ascii_images/image{randstr}.png",folder="ascii_arts",public_id=f"image{randstr}")

        return {"name": f"https://res.cloudinary.com/{cloud_name}/image/upload/v1638512394/ascii_arts/image{randstr}.png"}

@app.route("/create_folder", methods=["GET"])
def create_folder():
    if request.method=="GET":
        BASE_PATH = "./frontend/build/static/images/"
        image_folder_exist = os.path.exists(BASE_PATH)

        if image_folder_exist == False:
            os.mkdir(BASE_PATH)
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
