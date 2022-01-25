// Import express package
const express = require('express');
const htmlroutes = require ('./routes/htmlroutes')
const apiroutes = require ('./routes/apiroutes');
const { json } = require('express');
const PORT = process.env.PORT || 3001;

// Initialize our app variable by setting it to the value of express()
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))
app.use('/api', apiroutes)

app.use('/',htmlroutes)

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
