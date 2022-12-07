const mongoose = require('mongoose');
require('dotenv/config');

mongoose.set('strictQuery', true);

const connectToDataBase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.gvk1zny.mongodb.net/database?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log('Erro ao se conectar ao Banco de dados! => ', error);
      }

      return console.log('Conexão ao banco de dados realizada com sucesso!');
    },
  );
};

module.exports = connectToDataBase;
