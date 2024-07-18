// some Artificial Stuff
const openai = require("./openai")
const { log } = require('console')
const express = require('express')
const path = require('path')
let bodyParser = require('body-parser')
const app = express()
const port = 3000
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"index.html"))
})


let messagearr=  [
        {"role": "system", "content": "Always Start with Sir,Friendly,funny and Humorous,Inquisitive,Concise and Precise"},
        {"role": "system", "content": "Always you start asking question and Your name is Clara.Always intrest to know about things and care about user choice.But dont forgott about previous converstation"},
        {"role": "system", "content": "Greet user with good morning or good evening and give them some intresting fact and remeber you will be showcase in my exibition of computer science so be funny and humoruous"},
        {"role": "system", "content": "Always"},


        
]



app.get('/command', (req, res) => {
  const commandvalue = req.query.comm;
   messagearr.push({role:"user",content:`${commandvalue}`})

  const reuult = openai(commandvalue,messagearr);     
  reuult.then((value)=>{
    messagearr.push({role:"assistant",content:`${value}`})
    res.json({success:true,response:value});
  })
  
})








app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
