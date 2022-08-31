// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Student = require('./models/Student')
const Campus = require('./models/Campus')

const syncAndSeed = async () => {
    await db.sync({ force: true });

    //use this area to sync your database -- using own seed file.

    console.log(`
    Seeding successful!
  `);
};

Student.belongsTo(Campus)
Campus.hasMany(Student, { foreignKey: 'studentId'})

module.exports = {
    // Include your models in this exports object as well!
    modesl: {
      Campus,
      Student
    },
    db,
    syncAndSeed
}