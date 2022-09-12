const express = require('express');
const app = express();
const methodOverride = require("method-override")
const ruter = require("./routers/main")

app.use(express.static('public'));

app.set("view engine" , "ejs");

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride("_method"))


app.use("/", ruter)

app.listen(3000, ()=>{
    console.log('Servidor funcionando puerto 3000');
});