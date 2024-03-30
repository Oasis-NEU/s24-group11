import os
from supabase_py import create_client, Client

from flask import Flask, request, render_template

app = Flask(__name__)
SUPABASE_PROJECT_URL: str = os.getenv('SUPABASE_PROJECT_URL')
SUPABASE_API_KEY: str = os.getenv('SUPABASE_API_KEY')
supabase: Client = create_client(SUPABASE_PROJECT_URL, SUPABASE_API_KEY)
@app.route('/')
def default():
    return render_template('index.html')

@app.route('/supabase/login', methods=['POST'])
def login():
    data = request.json
    print(data['email'])
    user = supabase.auth.sign_in(email=data['email'], password=data['password'])
    print(user)
    return "logged in"


@app.route('/supabase/select')
def select():
    data = supabase.table("StudentPreferences").select("*").execute()
    print(data)
    return data

@app.route('/generatestudentpairings')
def generate():
    data = supabase.table("StudentPreferences").select("*").execute()
    print(data)

if __name__ == '__main__':
    app.run(debug=True)


# from flask import Flask
# app = Flask(__name__)

# @app.route('/backend/hello', methods=['GET'])
# def hello_world():
#     return "Hello, World!"

# if __name__ == '__main__':
#     app.run(port=5328)