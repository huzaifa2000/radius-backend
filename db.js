const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/Radius_db";

// var mongoClient = require("mongodb").MongoClient;
// mongoClient.connect("mongodb://huzaifa:EOrfuCPTo2ZR48kkC37pTqmsHXoT6lqjtbs2naIHn2X5C1qIv2kIpeCk0tgYxP3mxXKIETuxg4Y5ACDbP18zLQ==@huzaifa.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@huzaifa@", function (err, db) {
//   db.close();
// });

const connectToMongo=()=>{
    mongoose.connect(mongoURI , ()=>{
        console.log("Connected Successfully");
    })
}

module.exports = connectToMongo;