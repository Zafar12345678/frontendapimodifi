const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const itemRoutes = require('./routes/itemRoute');

const app = express();

// Enable All CORS Requests
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/api', itemRoutes);

// Database connection
mongoose.connect("mongodb+srv://merningday123:merningday123@cluster0.6llqgoh.mongodb.net/software?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
