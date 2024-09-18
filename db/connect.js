// const mongoose = require("mongoose");

// uri = "mongodb+srv://ume62887:wC42@9Bn@umehabiba.azmjl.mongodb.net/?UmeHabibaretryWrites=true&w=majority&appName=UmeHabiba ";
// const connectDB = () =>{   
//     return mongoose.connect(uri,{
//         useNewUrlParser : true,
//         useUnifieldTopology: true,
//     })

// }
// module.exports = connectDB;


// const mongoose = require("mongoose");

// // Corrected MongoDB URI format
// // const uri = "mongodb+srv://ume62887:wC42%409Bn@umehabiba.azmjl.mongodb.net/UmeHabiba?retryWrites=true&w=majority";

// const connectDB = (uri) => {
//     return mongoose.connect(uri, {
//         useNewUrlParser: true, // Correct option
//         useUnifiedTopology: true, // Correct option
//     });
// };
// module.exports = connectDB;



// const mongoose = require("mongoose");

// // Function to connect to MongoDB
// const connectDB = (uri) => {
//     return mongoose.connect(uri, {
//         useNewUrlParser: true, // Correct option
//         useUnifiedTopology: true, // Correct option
//     });
// };

// module.exports = connectDB;
const mongoose = require("mongoose");

// Function to connect to MongoDB
const connectDB = (uri) => {
    return mongoose.connect(uri);
};



module.exports = connectDB;