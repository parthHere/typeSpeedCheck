from flask import Flask, render_template
import random

app = Flask(__name__)

sentences = [
    "practice makes perfect",
    "python is powerful and simple",
    "typing fast needs consistency",
    "focus improves performance"
]

@app.route("/")
def index():
    return render_template("index.html", sentence=random.choice(sentences))

if __name__ == "__main__":
    app.run(debug=True)