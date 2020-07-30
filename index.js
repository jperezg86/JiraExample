const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
const cors = require("cors");


const JiraApi = require('jira-client');

app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/gira-connection', (req,res)=> {
    res.status = 200; 
    jira = new JiraApi({
        protocol: 'https',
        host: 'stackitchallenge.atlassian.net',
        username: 'jperezg86@gmail.com',
        password: 'Up0aBhmhiPJK3K1q8uwaF8BC', //this is the API_TOKEN
        apiVersion: '2',
        strictSSL: true
      });

      
      jira.findIssue("JMCCP-3")
      .then(issue => {
        res.send(`Status: ${issue.fields.status.name}`);
      })
      .catch(err => {
        res.send(err);
      });

})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))