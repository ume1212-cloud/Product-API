// require("dotenv").config();
// const connectDB = require("./db/connect")
// const Product = require("./model/product");
// const ProductJson = require("./product.json");
// const start = async () =>{
//     try {
// await connectDB(process.env.MONGODB_URL);
// await Product.create();
// console.log("good");
//     }catch (error){
//         console.log(error);

//     }
// };
// start();
require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./model/product");
const ProductJson = require("./product.json"); // Correctly importing product.json

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL); // Connecting to the database
        await Product.deleteMany(); // Optional: Clears the collection before inserting new data
        await Product.create(ProductJson); // Insert the products from the JSON file
        console.log("Data successfully inserted into MongoDB!");
    } catch (error) {
        console.log(error);
    }
};

start();
