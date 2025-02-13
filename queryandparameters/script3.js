const express = require("express"); 
const app = express();

let userData = [
    { id: 0, name: "Sourav", address: "Himachal Pradesh" },
    { id: 1, name: "Vishvas", address: "HARYANA" },
    { id: 2, name: "Sushant", address: "Himachal Pradesh" },
    { id: 3, name: "Taran", address: "Pehowa" },
    { id: 4, name: "Toran", address: "Rohtak" },
];

// Middleware to parse JSON (optional, useful for POST requests)
app.use(express.json());

// Get all users
app.get("/allusers", (req, res) => {
    res.json(userData);
});

// Get user by ID
app.get("/getuserbyid", (req, res) => {
    const id = parseInt(req.query.id); // Convert `id` to a number
    const user = userData.find(user => user.id === id);
    
    if (user) {
        return res.json(user);
    }
    res.status(404).send("User not found");
});

// Add a new user
app.get("/adduser", (req, res) => {
    const { id, name, address } = req.query;

    // Validate input
    if (!id || !name || !address) {
        return res.status(400).send("Missing required fields");
    }

    const newUser = {
        id: parseInt(id),
        name,
        address
    };

    userData.push(newUser);
    res.json({ message: "User added successfully", newUser });
});

// Start the server
const PORT = 3010;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
