import express from 'express'
import fs from 'fs'
import path from 'path'
import App from '../src/App'
import React from 'react';
import ReactDOMServer from 'react-dom/server'
const PORT = 8000;
const app = express();

app.use('^/$', (req, res, next)=>{
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        if(err){
            return res.status(500).send('some error');
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`)
        )
    })
})

app.use(express.static('build'))
console.log(path.resolve(__dirname));
app.listen(PORT, () => {
    console.log('app lunched with port 8000')
})