import express from 'express';
import cors from 'cors';

import UsersController from './controllers/UsersController'

const app = express();
app.use(cors());
app.use(express.json());

app.get('/users', UsersController.index);
app.post('/users', UsersController.create);

app.listen(3333, () => {
  console.log('Server listening on http://localhost:3333')
})