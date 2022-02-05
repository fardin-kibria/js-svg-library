const express = require('express');
const app = express();
const port = 4000;

// app[method](path, function) 
/*method is get post put patch delete and some others
but also all, and use
Path is a string, wildcard string, or Regular Expression
/resource String
/resource*whatever widcard string
/\.resource\/[0-9] +/ regExp

fucnction is either
(request, response) => {} typical
(request, response, next) => {} part of a chain
*/

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
