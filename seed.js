const {db} = require('./server/db')
const Student = require('./server/db/models/Student')
const Campus = require('./server/db/models/Campus')

const campuses = [
    {
       name: 'Queens College',
       imageUrl: 'https://macaulay.cuny.edu/wp-content/uploads/2016/07/qc10_bg_000056-1920x1080.jpg',
       address: '65-30 Kissena Blvd, Queens, NY 11367',
       description: "Queens College was established in 1937 and offers undergraduate degrees in over 70 majors, graduate studies in over 100 degree programs and certificates, over 40 accelerated master's options, 20 doctoral degrees through the CUNY Graduate Center, and a number of advanced certificate programs. Alumni and faculty of the school, such as Arturo O'Farrill and Jerry Seinfeld, have received over 100 Grammy Award nominations."

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

]

const seed = async () => {
    try {
      await db.sync({force: true})
  
      await Promise.all(campuses.map(campus => {
        return Campus.create(campus);
      }));

      await Promise.all(students.map(student => {
        return Student.create(student);
      }));
  
      console.log(('Seeding success!'))
      db.close()
    }
    catch (err) {
      console.error('Seeding did not complete, check pathing')
      console.error(err)
      db.close()
    }
  }
  
  seed()