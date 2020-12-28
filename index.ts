
import express from 'express';
import {calculateBmi} from './bmiCalculator'
import bodyParser from "body-parser";
//const express = require('express');
const app = express();
app.use(bodyParser.json());

app.get('/hello', (_req, res) => {
  res.send('Hello FullStack');
});

app.get('/bmi', (_req, res) => {
//http://localhost:3003/bmi?height=175&weight=80
  
  const { height, weight } = _req.query;

  const bmi = calculateBmi(Number(height), Number(weight));

  return res.json({ weight, height, bmi }); 

});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});