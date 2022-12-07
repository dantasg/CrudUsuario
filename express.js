const express = require('express');
const UserModel = require('./src/database/models/user.model');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers['content-type']}`);
  console.log(`Date: ${new Date()}`);

  next();
});

// Método get => Lista todos os usuários cadastrados
app.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// Método get => Busca um usuário específico por Id
app.get('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Método post => Cria um novo usuário
app.post('/users', async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    console.log('Error => ', error);
    res.status(500).send(error.message);
  }
});

// Método patch => Quando quiser alterar apenas um atributo do usuário
app.patch('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (error) {
    console.log('Error => ', error);
    res.status(500).send(error.message);
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndRemove(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// =============================================

const port = 8080;
app.listen(port, () => {
  console.log('Servidor rodando com express!');
  console.log('Acesse: http://localhost:8080/');
});
