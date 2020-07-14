const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const productRouter = require(`./routes/product_route`)
const userRouter = require(`./routes/user_route`)
const transactionRouter = require(`./routes/transaction_route`)
const providerRouter = require(`./routes/provider_route`)

app.use(`/products`, productRouter)
app.use(`/users`, userRouter)
app.use(`/transactions`, transactionRouter)
app.use(`/providers`, providerRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});