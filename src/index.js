const express = require('express');

const app = express();

app.get('/projects', (resquest, response) => {
    return response.json([
      'Projeto 1',
      'Projeto 2',  
    ]);
});

app.post('/projects', (resquest, response) => {
    return response.json([
      'Projeto 1',
      'Projeto 2',
      'Projeto 3',  
    ]);
});

app.put('/projects', (resquest, response) => {
    return response.json([
      'Projeto 4',
      'Projeto 2',
      'Projeto 3',  
    ]);
});

app.delete('/projects', (resquest, response) => {
    return response.json([
      'Projeto 2',
      'Projeto 3',  
    ]);
});




app.listen(3333);
