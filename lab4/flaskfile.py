from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///demo.sqlite"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = True
app.config["DEBUG"] = True

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Person(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    surname = db.Column(db.String)
    job = db.Column(db.String)

class PersonSchema(ma.Schema):
    class Meta:
        fields = ("id", "name", "surname", "job")


with app.app_context():
    db.drop_all()
    db.create_all()
    
    db.session.add(Person(name="ser", surname="serowy", job='it'))
    db.session.commit()



@app.route('/', methods=['GET'])
def get_hello():
    return jsonify(message='Hello, this is a GET request!')

@app.route('/hello', methods=['GET'])
def get_name():
    name = request.args.get("name", "")
    return jsonify(message=f'Hello, {name}! This is a POST request.')   

@app.route('/', methods=['POST'])
def post_hello():
    data = request.get_json()
    name = data.get('name', 'Anonymous')
    return jsonify(message=f'Hello, {name}! This is a POST request.')




@app.route('/person/<int:id>', methods=['GET'])
def get_single_person(id):
    person = Person.query.get_or_404(id)
    person_schema = PersonSchema()
    result = person_schema.dump(person)
    return jsonify(result)

@app.route('/person', methods=['GET'])
def get_all_people():
    people = Person.query.all()
    person_schema = PersonSchema(many=True)
    result = person_schema.dump(people)
    return jsonify(result)

@app.route('/person', methods=['POST'])
def create_person():
    data = request.get_json()
    person_schema = PersonSchema()

    new_person = Person(
        name=data.get('name'),
        surname=data.get('surname'),
        job=data.get('job')
    )

    try:
        db.session.add(new_person)
        db.session.commit()
        result = person_schema.dump(new_person)
        return jsonify(result), 201
    except Exception as e:
        print(f'Error: {str(e)}')
        return jsonify(message=f'Error: {str(e)}'), 500



if __name__ == '__main__':
    app.run()

