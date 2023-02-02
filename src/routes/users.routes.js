const { Router } = require("express");
const { 
    getAllUsers, getUserById, getUserWithCourses, createUser, updateUser,
    
 } = require("../controllers/users.controllers");


const router = Router();

//Obtener un usuario por su id ( no mostrar created_At, update_at ni password)
router.get("users", getAllUsers)
router.get("/users/:id", getUserById );
// Obtener usuario con los cursos
router.get("/users/:id/users_courses", getUserWithCourses);
// crear un usuario
router.post("/users", createUser);
// Actualizar un usuario solo nombre y contrasena
router.put("users/:id", updateUser);

module.exports = router;
