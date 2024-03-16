import os
from supabase_py import create_client, Client

from flask import Flask, request

app = Flask(__name__)
SUPABASE_PROJECT_URL: str = os.getenv('SUPABASE_PROJECT_URL')
SUPABASE_API_KEY: str = os.getenv('SUPABASE_API_KEY')
supabase: Client = create_client(SUPABASE_PROJECT_URL, SUPABASE_API_KEY)
@app.route('/')
def default():
    return "Hello World"

@app.route('/supabase/login', methods=['POST'])
def login():
    data = request.json
    print(data['email'])
    user = supabase.auth.sign_in(email=data['email'], password=data['password'])
    print(user)
    return "logged in"


@app.route('/supabase/select')
def select():
    data = supabase.table("StudentSchedules").select("*").eq("id","73145d5a-78ef-4b5e-9809-a7041f62df1d").execute()
    print(data.data)
    return data.data

@app.route('/supabase/update')
def update():
    return "Supabase UPDATE"

@app.route('/supabase/delete')
def delete():
    return "Supabase DELETE"    

if __name__ == '__main__':
    app.run(debug=True)


# from flask import Flask
# app = Flask(__name__)

# @app.route('/backend/hello', methods=['GET'])
# def hello_world():
#     return "Hello, World!"

# if __name__ == '__main__':
#     app.run(port=5328)