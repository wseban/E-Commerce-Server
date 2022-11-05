# E-Commerce-Server

## Screencastify Link:
https://watch.screencastify.com/v/juP12tE4gAQo851fX0jY

![Site](./pics/Screenshot%202022-11-04%20at%205.20.45%20PM.png)
 
![Site](./pics/Screenshot%202022-11-04%20at%205.21.05%20PM.png)

## Usage
Using the command line the user should first run an "npm i" to download all dependencies for this application.  To start the user should log into mysql and run "SOURCE ./db/schema.sql" (if coming from the root of the file), then quit mysql.  From the command line run "npm run seed" to seed the newly created database in mysql.  To start the application the user should run "node server.js" to initiate the PORT listener.  To check the accuracy of the routes and information now stored in mysql use insomnia to enter http://localhost:3001/api/ and test out the get, post, put, and delete routes for all or specific ids given.  

## Technologies Used
- Express.js - Express is a node js web application framework that provides broad features for building web and mobile applications. 
- MySql - Open source database used to store tables in this project. 
- Node.js - An asynchronous event-driven program to run Javascript.
- JavaScript - Allows developer to make static webpages dynamic and interactive.  For this exercise it was used to alter the original webpage to change the questions, change the answers, add a dynamic timer/countdown(that also ends the game), as well as, allow saving of scores.
- Git - Git is what I used to work on my personal computer and pushing my work to GitHub.
- GitHub - A cloud based repository that holds my saved code reserved for resetting my personal computer deployment.

## Description

The purpose of this project was to utilize our skills with models, associating those models through association methods and writing routes for an entire backend server development that an E-Commerce webpage could utilize.

## Installation

Navigate to file using your command line and run 'npm i'. After the dependencies have been downloaded, source the schema.sql within the db directory which will create the database.  Once the database has been created, seed your database with all current information using npm run seed.  To initiate the localhost port listener run node server.js or npm start in your command line.

## Lessons Learned
The most effective lessons learned for me were...
1. Writing models.  
2. Writing many to many associations of models.


## Code Snippets
JavaScript
```javaScript
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);
```
```JavaScript
Product.belongsToMany(Tag, {
  foreignKey: 'product_id',
  through: {model: ProductTag, unique: false},

});
Tag.belongsToMany(Product, {
  foreignKey: 'tag_id',
  through: {model: ProductTag, unique: false},
```

## Credits

NA

## License
Please refer to the LICENSE in the Repo.