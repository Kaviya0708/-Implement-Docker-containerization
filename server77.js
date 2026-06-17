const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/users", (req, res) => {

    const { name } = req.body;

    res.json({
        success: true,
        message: "User Created",
        user: {
            id: 1,
            name
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});