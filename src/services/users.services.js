const Users = require("../models/users.models");
const Videos = require("../models/videos.models");

class UserServices {
  static async getAll() {
    console.log("get one");
    try {
      const result = await Users.findOne(id, {
        attributes: {
          exclude: ["password", "email"],
        },
      });
      console.log("sincronizando");
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await Users.findById(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getWithCourses(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: {
          exclude: ["course_id"],
        },
        include: {
          model: Videos,
          attributes: ["title", "url"],
          as: "userCourses",
        },
      });
    } catch (error) {
      throw error;
    }
  }

  static async create(user) {
    try {
      const result = Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
