const db = require('../utils/database');
const { DataTypes } = require('sequelize');


const UserCourses = db.define("users_courses", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull:  false,
        unique: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
      
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "course_id",
        
    },


});

module.exports = UserCourses;