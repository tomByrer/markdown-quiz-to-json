// runs other scripts, bot for actual use & testing
// local MarkDown file in sister folder

const md2json = require("./lhjq-md-into-json")
const fs = require('fs')
// import path from 'path'
// const __dirname = path.resolve()
// const dirView = __dirname +'/src/views/paper/'
const quizMD = fs.readFileSync( '../javascript-questions/README.md', "utf8")

let resObj = md2json.lhjqMDintoJSON(quizMD)

// console.log(JSON.stringify(resObj))
fs.writeFileSync( './quiz.json', JSON.stringify(resObj) )
