// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Student = require('./models/Student')
const Campus = require('./models/Campus')

const campuses = [
  {
     name: 'Queens College',
     imageUrl: 'https://macaulay.cuny.edu/wp-content/uploads/2016/07/qc10_bg_000056-1920x1080.jpg',
     address: '65-30 Kissena Blvd, Queens, NY 11367',
     description: "Queens College was established in 1937 and offers undergraduate degrees in over 70 majors, graduate studies in over 100 degree programs and certificates, over 40 accelerated master's options, 20 doctoral degrees through the CUNY Graduate Center, and a number of advanced certificate programs. Alumni and faculty of the school, such as Arturo O'Farrill and Jerry Seinfeld, have received over 100 Grammy Award nominations."
  },
  {
    name: 'Baruch College',
    imageUrl: 'https://nypost.com/wp-content/uploads/sites/2/2020/09/baruch_01.jpg?quality=75&strip=all',
    address: '137 E 25th St New York, NY 10010',
    description: "Baruch College is ranked among the region's and nation's top colleges by U.S. News & World Report, Forbes, Princeton Review, and others. Our campus is within easy reach of Wall Street, Midtown, and the global headquarters of major companies and non-profit and cultural organizations, giving students unparalleled internship, career, and networking opportunities. The College's more than 19,500 students, who speak more than 110 languages."
 }
]

const students = [
  {
      firstName: 'Roger',
      lastName: 'Salguero',
      email: 'roger@aol.com',
      imageUrl: 'https://media-exp1.licdn.com/dms/image/C4D03AQE631CRUrmWXQ/profile-displayphoto-shrink_100_100/0/1614001628212?e=1667433600&v=beta&t=P0iLcE9T4vUXcMbvmkgsATwlhwPXNsY7VpwEnaNjmik',
      gpa: 3.5
  },
  {
    firstName: 'Dennys',
    lastName: 'Benitez',
    email: 'roger@aol.com',
    gpa: 4.0
  }

]

const syncAndSeed = async () => {
  try {
    await db.sync({force: true})

    await Promise.all(campuses.map(campus => {
      return Campus.create(campus);
    }));

    await Promise.all(students.map(student => {
      return Student.create(student);
    }));

    console.log(('Seeding success!'))
  }
  catch (err) {
    console.error('Seeding did not complete, check pathing')
    console.error(err)
  }
};

Student.belongsTo(Campus)
Campus.hasMany(Student)

module.exports = {
    // Include your models in this exports object as well!
    modesl: {
      Campus,
      Student
    },
    db,
    syncAndSeed
}