const db = require("../utils/database");
const Users = require("../models/users.models");
const Courses = require("../models/courses.models");

const users = [
    { first_name: "Carlos", last_name: "Perez",  email: "carlos@gmail.com", password: "123458" }, // id: 1
    { first_name: "Daniel", last_name: "Caceres",  email: "daniel@gmail.com", password: "12385" },
    { first_name: "Pedro", last_name: "Pedro",  email: "pedro@gmail.com", password: "1245" }
]

const courses = [
  { title: "Html", description: "Aprender html", instructor: "Carlos"}, // 1
  { title: "Css", description: "Aprender css", instructor: "Pedro"}, // 2
  { title: "Javascript", description: "Aprender javascript", instructor: "Casals" },
  { title: "Python", description: "Aprender Python", instructor: "Ian de la rosa"}
]

const userCourse = [
  {userId: 1, courseId: 1},
  {userId: 2, courseId: 1},
  {userId: 3, courseId: 1},
  {userId: 6, courseId: 2},
  {userId: 10, courseId: 2},
  {userId: 3, courseId: 2},
  {userId: 6, courseId: 3},
  {userId: 6, courseId: 4},
  {userId: 2, courseId: 4},
];

// create, findOne, findAll, findByPk, update, destroy

db.sync({force: true})
  .then(() => {
    console.log("Iniciando con el Seed")
    users.forEach((user) => Users.create(user));
  })
  .catch((error) => console.log(error));

  setTimeout(() => {
    courses.forEach((course) => Courses.create(course));
  }, 100);

  setTimeout(() => {
    
  }, 250)