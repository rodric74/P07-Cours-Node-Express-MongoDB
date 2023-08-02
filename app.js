// importer express avec require 
const express = require('express'); 

// on appelle la méthode express
const app = express(); 

app.use((req, res, next) => {
    console.log('Requête reçue !');
    next(); // on appelle next pour aller au prochain middleware
  });
  
  app.use((req, res, next) => {
    res.status(201);
    next();
  });
  
  app.use((req, res, next) => {
    res.json({ message: 'Votre requête a bien été reçue !' });
    next();
  });
  
  app.use((req, res) => {
    console.log('Réponse envoyée avec succès !');
  });

// on export cette constante pour y accéder depuis nos autres fichers. 
module.exports = app; // on export cette constante pour y accéder depuis nos autres fichers. 
