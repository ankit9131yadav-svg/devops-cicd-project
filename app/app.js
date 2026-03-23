const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("🚀ANKIT  CI/CD Pipeline LIVE SUCCESS");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
