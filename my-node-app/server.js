const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Serve static HTML
app.use(express.static(path.join(__dirname, 'views')));

app.get('/api', (req, res) => {
  res.json({ message: "Hello from Azure Node.js App!" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

