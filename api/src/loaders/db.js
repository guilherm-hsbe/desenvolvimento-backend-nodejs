const mongoose = require('mongoose');

async function startDB(){
    await mongoose.connect('mongodb+srv://ghsb:g12089344@fatecnodejs.sipcivq.mongodb.net/test');
}

module.exports = startDB;