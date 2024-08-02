const express = require('express');
const app = express();
const classRoutes = require('./routes/classRoutes');
const sectionRoutes = require('./routes/sectionRoutes');

// Middleware to parse JSON data
app.use(express.json());

// Use the class routes
app.use('/api', classRoutes);
app.use('/api', sectionRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

