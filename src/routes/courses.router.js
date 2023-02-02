const { Router } = require("express");

const router = Router();

// Agregar un curso a un usario
router.post("/courses/:id");
// Obtener todos los cursos
router.get("/courses");
// Obtener todos los cursos sus categorias y videos, categoria solo nombre y videos solo nombre y url
router.get("/courses/categories/videos");

// Crear un nuevo curso
router.post("/courses");
// Editar un curso
router.put("/courses/:id") // solo la descripcion editar
// Crear videos
router.post("/courses/videos");
// eliminar videos
router.delete("/courses/videos/:id");

// Crear categoria
router.post("/courses/categories");
// Eliminar categoria
router.delete("/courses/categories/:id")


