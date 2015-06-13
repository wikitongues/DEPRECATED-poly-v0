from flask import Flask,jsonify,request
import json
from flask.ext.sqlalchemy import SQLAlchemy
from datetime import datetime
app = Flask(__name__)

# Create the Flask-SQLAlchemy object and an SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todo.db'
db = SQLAlchemy(app)

class Phrase(db.Model):
    __tablename__ = "Phrase"
    id = db.Column(db.Integer,autoincrement=True)
    book = db.Column(db.String(1000000), primary_key=True)
    createdAt = db.Column(db.DateTime(),nullable=False)
    sourcePhrase = db.Column(db.String(10000000),nullable=False)
    targetPhrase = db.Column(db.String(10000000),nullable=False)

    def __init__(self,book,createdAt,sourcePhrase,targetPhrase):
        self.book = book
        self.createdAt = createdAt
        self.sourcePhrase = sourcePhrase
        self.targetPhrase = targetPhrase


# class Info(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     data = db.Column(db.Text, unique=False)

#     # When we create a new Todo it should be incomplete and have a title
#     def __init__(self,data):
#         self.data = data

class Book(db.Model):
    __tablename__ = "Book"
    id = db.Column(db.Integer, primary_key=True,autoincrement=True)
    dateCreated = db.Column(db.DateTime(), default=datetime.utcnow,unique=False,nullable=False)
    lastEdited = db.Column(db.DateTime(), default=datetime.utcnow,unique=False,nullable=False)
    #createdBy, we should consider whether people need to sign in to create a book or not?
    createdBy = db.Column(db.String(100), unique=False,nullable=False)
    location = db.Column(db.String(100), unique=False,nullable=True)
    privacy = db.Column(db.Boolean(False),unique=False,nullable=False)
    sourceName = db.Column(db.String(100),unique=False,nullable=False)
    targetName = db.Column(db.String(100),unique=False,nullable=False)
    title = db.Column(db.String(100),unique=False,nullable=False)
    favorite = db.Column(db.Boolean(False),unique=False,nullable=False)
    bannerUrl = db.Column(db.String(500),unique=False,nullable=False)
    editing = db.Column(db.Boolean(True),unique=False,nullable=False)
    phrases = db.Column(db.String(1000000),db.ForeignKey('Phrase.book'))

    #set reasonable defaults later
    #no one will ever know....So sayth the freddie
    def __init__(self,
                 createdBy='x',
                 privacy=False,
                 sourceName='x',
                 targetName='x',
                 title='x',
                 favorite=False,
                 bannerUrl='x',
                 editing=False,
                 phrases='x',
                 location="x",
                 dateCreated=datetime.now(),
                 lastEdited=datetime.now()
    ):
        self.dateCreated = dateCreated
        self.lastEdited = lastEdited
        self.createdBy = createdBy
        self.location = location
        self.privacy = privacy
        self.sourceName = sourceName
        self.targetName = targetName
        self.title = title
        self.favorite = favorite
        self.bannerUrl = bannerUrl
        self.editing = editing
        self.phrases = phrases


# class DynoBook(db.Model):
#     pass
#     # When we create a new Todo it should be incomplete and have a title
#     #def __init__(self,data):
#     #    self.data = data


@app.route("/api/book",methods=["GET","POST"])
@app.route("/api/book/<data>",methods=["GET","POST"])
def api_book(data=None):
    if request.method=='POST':
        print data
        if data:
            data=json.loads(data)
            book = Book(
                sourceName=data['sourceName'],
                createdBy=data['createdBy'],
                privacy=data['privacy'],
                targetName=data['targetName'],
                title=data['title'],
                favorite=data['favorite'],
                bannerUrl=data['bannerUrl'],
                editing=data['editing'],
                phrases=data['phrases'],
                location=data['location'])

            db.session.add(book)
            db.session.commit()
            return "success"
    if request.method=='GET':
        #return json.dumps(Book.query.all())
        books = []
        for result in Book.query.all():
            book = {}
            book["dateCreated"] = str(result.dateCreated)
            book["lastEdited"] = str(result.lastEdited)
            book["createdBy"] = result.createdBy
            book["location"] = result.location
            book["privacy"] = result.privacy
            book["sourceName"] = result.sourceName
            book["targetName"] = result.targetName
            book["title"] = result.title
            book["favorite"] = result.favorite
            book["bannerUrl"] = result.bannerUrl
            book["editing"] =result.editing
            book["phrases"] = result.phrases
            books.append(book)
        return json.dumps(books)

# Create the database tables.
db.create_all()


if __name__ == '__main__':
    app.run(debug=True)
