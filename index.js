import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); 
const cheerio = require('cheerio');
import { generate, count } from "random-words";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/random-word', async (req, res) => {
  // Your code to fetch users from a database or any other source
  // Send the response as JSON
 
  const word = generate();
  const definition = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);


  res.json({
      "word" : word,
      "definition": definition.data
    });
  
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  
});