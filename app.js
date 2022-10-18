const express = require('express');
const app = express();
const db = require('./db');
const { models } = db;
const { Movie, Actor } = models;

module.exports = app;


app.get('/api/movies', async(req, res, next)=> {
  try {
    res.send(await Movie.findAll());
  }
  catch(ex){
    next(ex);
  }
});

app.get('/api/actors', async(req, res, next)=> {
  try {
    res.send(await Actor.findAll());
  }
  catch(ex){
    next(ex);
  }
});
