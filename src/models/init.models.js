
// Importar todos los modelos (Models) creados
const Users = require("./users.models");
const UserCourses = require("./userCourses.model");
const Courses = require("./courses.models");
const Videos = require("./videos.models");
const Categories = require("./categories.models");

const initModels = () => {
  // Crear las relaciones
  // hasOne --> tiene uno solo
  // hasMany -> tiene muchos
  // belongsTo -> Pertenece a

  UserCourses.belongsTo(Users, { as: "user", foreignKey: "user_id" });
  Users.hasMany(UserCourses, { as: "userCourses", foreignKey: "user_id" });

  // relaciones entre courses and categories

  Courses.belongsTo(UserCourses, { as: "courses", foreignKey: "course_id" });
  UserCourses.hasMany(Courses, { as: "users", foreignKey: "course_id" });

  Categories.belongsTo(Courses, { as: "course", foreignKey: "course_id" });
  Courses.hasMany(Categories, {  as: "categories",foreignKey: "course_id",});

  Videos.belongsTo(Courses, { as: "course", foreignKey: "course_id" });
  Courses.hasMany(Videos, {  as: "videos",foreignKey: "course_id",});

};

module.exports = initModels;
