require ("dotenv") .config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const products_routes = require("./routes/products");
const connectDB = require("./db/connect")
// Basic route
app.get("/", (req, res) => {
    res.send("Hi, I am live!");
});

// Use products routes
app.use("/api/products", products_routes);

// Start the server
const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`yes i am gere , on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

// Call the start function to initialize the server
start();
