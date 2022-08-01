const {Engine} = require("./src/models/Engine")
const seedData = require("./seedData");
const {sequelize} = require("./src/db")

const syncSeed = async () => {
    await sequelize.sync({force: true});
    console.log("The seed data: " + seedData[0]);
    await Engine.create(seedData[0])
}

syncSeed()