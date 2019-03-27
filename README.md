# puppeteer-pdf-generator

It will generator a pdf using the client component (it can be any tech i.e backbone,react,angular).

# How to run

* Go to client folder and run `npm install`
* Run command `npm start` to start the client server (location : http://localhost:3000)
* Go to server folder and run `npm install`
* Run command `node server.js` to start the node server (location : http://localhost:3001)
* Go to http://localhost:3000 and click on download report it will hit the API http://localhost:3001/export/pdf and get the PDF
* You can directly call http://localhost:3001/export/pdf if you dont want to call it from client application.
