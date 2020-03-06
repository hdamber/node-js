let path = require('path');
let fs = require('fs');
let rp = require("request-promise");

let dataPath = path.join(__dirname, "./popular-articles.json");

rp("https://reddit.com/r/popular.json", (err, res, body) => {

    JSON.parse(body).data.children.forEach(reddit => {
        {
        fs.appendFileSync(dataPath, `Title: ${reddit.data.title}, Url: ${reddit.data.url}, Author: ${reddit.data.author}` + '\n')
        }
    })
})

