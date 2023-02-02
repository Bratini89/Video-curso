const Courses = require("../models/courses.models");
const { getById } = require("./users.services");

class CourseServices {
  static async getAll() {
    try {
      const result = await Courses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await Courses.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(course)
}

module.exports = CourseServices;
