// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Student = require('./models/Student')
const Campus = require('./models/Campus')

const campuses = [
  {
    name:"Queens College",
    imageUrl:"https://macaulay.cuny.edu/wp-content/uploads/2016/07/qc10_bg_000056-1920x1080.jpg",
    address:"65-30 Kissena Blvd, Queens, NY 11367",
    description:"Queens College was established in 1937 and offers undergraduate degrees in over 70 majors, graduate studies in over 100 degree programs and certificates, over 40 accelerated master's options, 20 doctoral degrees through the CUNY Graduate Center, and a number of advanced certificate programs. Alumni and faculty of the school, such as Arturo O'Farrill and Jerry Seinfeld, have received over 100 Grammy Award nominations.",
  },
  {
    name:"Baruch College",
    imageUrl:"https://nypost.com/wp-content/uploads/sites/2/2020/09/baruch_01.jpg?quality=75&strip=all",
    address:"137 E 25th St New York, NY 10010",
    description:"Baruch College is ranked among the region's and nation's top colleges by U.S. News & World Report, Forbes, Princeton Review, and others. Our campus is within easy reach of Wall Street, Midtown, and the global headquarters of major companies and non-profit and cultural organizations, giving students unparalleled internship, career, and networking opportunities. The College's more than 19,500 students, who speak more than 110 languages.",
  },
  {
    name:"UA",
    imageUrl:"https://64.media.tumblr.com/eab1dc3786ee0e3837a971e52591d2a0/tumblr_ow5svrUNvS1wvw5o0o1_1280.jpg",
    address:"Shizuoka Prefecture",
    description:"U.A. is the #1 ranked high school for heroics and is considered as the top Hero Academy in the world. Students are separated into specific departments and classes, allowing students to decide what is the best way they can utilize themselves for their probable entry into the pro-hero world.  In recent years, the school has undergone a shift, using their prestige to begin attracting more international students, allowing them to attract a more diverse student body. Whether these students remain in Japan after their graduation or return to their home countries, the goal of the school remains the same. \"To educate and nurture today's students to become the heroes of tomorrow.\"",
  },
  {
    name:"Fullstack Academy",
    imageUrl:"https://mma.prnewswire.com/media/834573/Fullstack_Academy_logo.jpg?p=facebook",
    address:"5 Hanover Square 11th floor, New York, NY 10004",
    description:"A trailblazer in bootcamp education, Fullstack Academy prepares students for fulfilling careers in tech through our NYC campus, women-focused Grace Hopper Program, online learning, and more than a dozen university partnerships (and counting).",
  }
]

const students = [
  {
    firstName:"Midoriya",
    lastName:"Izuku",
    email:"deku@gmail.com",
    imageUrl:"https://64.media.tumblr.com/e8584ac0cd8831f1551ed794443f41b9/ef910b3eb872a405-ee/s640x960/f1c0d46ca70e776eb94da87949570dbf316a127f.jpg",
    gpa:3.8,
    campusId:3
  },
  {
    firstName:"Tenya",
    lastName:"Iida",
    email:"turbo@gmail.com",
    imageUrl:"https://i.pinimg.com/736x/b3/b1/8d/b3b18dda7fa78de42255d5058f7bad0a.jpg",
    gpa:4,
    campusId:3
  },
  {
    firstName:"Ochako",
    lastName:"Uraraka",
    email:"uravity@gmail.com",
    imageUrl:"https://i.pinimg.com/originals/99/c0/35/99c0357087f211295788a5a35d859a31.jpg",
    gpa:4,
    campusId:3
  },
  {
    firstName:"Roger",
    lastName:"Salguero",
    email:"roger@aol.com",
    imageUrl:"https://media-exp1.licdn.com/dms/image/C4D03AQE631CRUrmWXQ/profile-displayphoto-shrink_100_100/0/1614001628212?e=1667433600&v=beta&t=P0iLcE9T4vUXcMbvmkgsATwlhwPXNsY7VpwEnaNjmik",
    gpa:3.5,
    campusId:4
  },
  {
    firstName:"Tsuyu",
    lastName:"Asui",
    email:"froppy@gmail.com",
    imageUrl:"http://pm1.narvii.com/6302/8d9e05df8560bd95486b1dad710c319763a97f6e_00.jpg",
    gpa:4,
    campusId:3
  },
  {
    firstName:"Kyouka",
    lastName:"Jiro",
    email:"KJiro@gmail.com",
    imageUrl:"https://nntheblog.b-cdn.net/wp-content/uploads/2022/04/Kyoka-Jiro.jpg",
    gpa:3.8,
    campusId:3
  },
  {
    firstName:"Mineta",
    lastName:"Minoru",
    email:"grapejuice@gmail.com",
    imageUrl:"https://static.wikia.nocookie.net/f9dfe5a2-cfeb-49a4-a3d2-5ebc7ce68e5a",
    gpa:3.5,
    campusId:3
  },
  {
    firstName:"Todoroki",
    lastName:"Shoto",
    email:"shoto@gmail.com",
    imageUrl:"https://paintbynumberscanvas.com/wp-content/uploads/2020/10/shoto-todoroki-paint-by-number.jpg",
    gpa:3.9,
    campusId:3
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