# puppeteer-pdf-generator

It will generate a pdf using the client component (it can be any tech i.e backbone, react, angular).

# How it works

Let's assume you have React, Angular, Backbone or any Javascript UI which is running on http://localhost:3000. and the server is running on http://localhost:3001. Now when you want to download the pdf we will hit the API (http://localhost:3001/export/pdf)

Internally server starts a headless browser and opens the http://localhost:3000 application and create the pdf (i.e print layout). 

Note: Server-side pdf generator code is hardcoded so you will get same pdf every time.

# How to run

* Go to client folder and run `npm install`
* Run command `npm start` to start the client server (location : http://localhost:3000)
* Go to server folder and run `npm install`
* Run command `node server.js` to start the node server (location : http://localhost:3001)
* Go to http://localhost:3000 and click on download report it will hit the API http://localhost:3001/export/pdf and get the PDF
* You can directly call http://localhost:3001/export/pdf if you don't want to call it from the client application.
