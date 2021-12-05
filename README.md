# PASSME ASCII
PASSME ASCIIはお気に入りの画像をアスキーアートに変換するアプリケーションです。
アスキーアートとは被写体をASCII文字列のみで表現するアートです。

# Link
デプロイ先は heroku です。  
https://make-ascii-art.herokuapp.com/


# Coding languages

バックエンド

- Python -- Flask

フロントエンド

- TypeScript -- React

# Installation

```bash
pip install Flask
pip install numpy
pip install opencv-python
pip install pykakasi
pip install Pillow

#デプロイする場合
pip install gunicorn
```

# Usage

```bash
git clone https://github.com/shomffl/make-ascii-art.git

#ルートディレクトリで
flask run
```
