from flask import Flask, render_template, url_for
import os

app = Flask(__name__)

# Index
@app.route('/')
def index():
    return render_template('index.html')


# Log in
# @app.route('/log-in')
# def log_in():
#     return render_template('log-in.html')


# Sign up
# @app.route('/sign-up')
# def sign_up():
#     return render_template('sign-up.html')


# Admin-dashboard
# @app.route('/admin-dashboard')
# def admin_dashboard():
#     return render_template('admin-dashboard.html')


# Admin-packages
# @app.route('/admin-packages')
# def admin_packages():
#     return render_template('admin-packages.html')


# User-dashboard
# @app.route('/user-dashboard')
# def user_dashboard():
#     return render_template('user-dashboard.html')


if __name__ == '__main__':
    app.run(
        host=os.environ.get("IP", "0.0.0.0"),
        port=int(os.environ.get("PORT", "5000")),
        debug=True)
