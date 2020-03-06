let path = require("path");
let fs = require("fs");
let dataPath = path.join(__dirname, "../chirps.json");

let chirps = [
  {
    name: "Hallie",
    message: "hello there"
  },
  {
    name: "TJ",
    message: "im tired"
  },
  {
    name: "Rachel",
    message: "whats up"
  },
  {
    name: "Brittany",
    message: "work work work~"
  },
  {
    name: "Kat",
    message: "AHHHHHHHHHH"
  }
];


fs.writeFile(dataPath, JSON.stringify(chirps), err => {
  if (err) {
    return console.log(err);
  }
});

fs.readFile('chirps.json', (err, data) => {
  if (err) throw err;
  let readChirps = JSON.parse(data);
  console.log(readChirps)
})

// chirps.forEach(chirp => console.log(chirps));