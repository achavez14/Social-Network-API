const express = require('express');
const connectDB = require('./config/connection');
const app = express();

connectDB();

app.use(express.json());

app.use('/api/notes', require('./routes/notes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});