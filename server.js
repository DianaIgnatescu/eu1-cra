const express = require('express');

const path = require('path');

const app = express();

// cra works is when webpack runs, it creates a build folder whihc contains the index.html and bundle.js, 

const pathToIndexHtml = path.join(__dirname, 'build', 'index.html');
const pathToBuildFolder = path.join(__dirname, 'build');

console.log(__dirname);
console.log(pathToIndexHtml);
console.log(pathToBuildFolder);

// 2 - allow static assets to be served off of this folder('build);
app.use(express.static(pathToBuildFolder));
app.get('/', (req, res) => {
  // 1 - res.sendFile
  res.sendfile(/* absolute path to the asset */pathToIndexHtml)
})
  
app.listen(process.env.PORT || 5000);