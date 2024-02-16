from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

users = {}

@app.route("/")
def home():
    return render_template('home.html')

@app.route("/sign-up", methods=["POST", "GET"])
def sign_up():
    if request.method == "GET":
        return render_template('sign-up.html')
    elif request.method == "POST":
        email = request.form.get('email')
        password = request.form.get('password')
        if email in users:
            return 'This email is already registered. Please <a href="/sign-in">sign in</a> instead.', 400
        users[email] = password  
        return render_template('thank-you.html')

@app.route("/sign-in", methods=["GET", "POST"])
def sign_in():
    if request.method == "GET":
        return render_template('sign-in.html')
    elif request.method == "POST":
        email = request.form.get('email')
        password = request.form.get('password')
        if email in users and users[email] == password:
           return render_template('my-profile.html'), 200
        else:
            return 401

if __name__ == "__main__":
    app.run(debug=True)
