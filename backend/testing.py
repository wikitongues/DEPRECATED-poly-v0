import requests
from datetime import datetime
import json

x = {'sourceName': 'Eric', 'bannerUrl': 'butts', 'createdBy': 'Eric', 'editing': True, 'targetName': 'English', 'privacy': False, 'phrases': 'words have no meaning in this place', 'title': 'I pseak my own tongue', 'favorite': True, 'location': 'here'}

#print requests.post("http://localhost:5000/api/book/"+json.dumps(x))
print requests.get("http://localhost:5000/api/book").text
