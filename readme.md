# BACKEND FOR TASK

## RUN THE APP
- To run the server first of all you need to install the dependencies using `npm install`
- `npm run dev`

### dependencies used:
- express: NODE.JS framework
- nodemon: allows you live reload while coding.
- express-promise-router: Its a great dependency to use for async stuff...
- babel: Javascript code tranformer

### Folders and files explanation:
- `APPS`: It contains in this case only one api `phone` but it could contain multiples,
- `controller.js`: Contains the logic.
- `model.js`: Contains the data model.
- `url.js` -> Contains the routing of my app.

`CONFIG` folder: Contains the configuration of the app, it could contain the pool for mySQL for example, the connections to the database like mongoDb, etc. It should contain also an .env file, in this case I have dispensed as it is a demo. It also contains the route handling for all the apis, so its the  first endpoint to hit fallowing the structure localhost:8000/`api`/+API_NAME/RouteToHit

`.babelrc` -> Contains the babel configuration
<br>
`app.js` -> It is kept as clean as possible, it is the core of the application.

### TEST ENDPOINT 
http://localhost:8000/api/phone/phones

## thank you
Kamil Pozezynski