import { Router } from "express";
import { container } from "tsyringe";
import { UserController } from "../../infrastructure/entry-points/controllers/user/UserController";
import { authenticateToken } from "../../infrastructure/middlewares/AuthMiddleware";

const router = Router();

const userController = container.resolve(UserController);
/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Iniciar sesión de usuario
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: guillermo@gmail.com
 *               password:
 *                 type: string
 *                 example: 12345asd
 *     responses:
 *       200:
 *         description: Usuario logueado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuario loggeado exitosamente
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       400:
 *         description: Error de login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: USER_NOT_EXISTS | INVALID_PASSWORD | USER_RESPOSITORY_EXCEPTION
 */
router.post("/user/login", userController.loginUser);
/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Felipe
 *               email:
 *                 type: string
 *                 example: guillermo@gmail.com
 *               password:
 *                 type: string
 *                 example: 12345asd
 *     responses:
 *       200:
 *         description: Usuario registrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuario registrado exitosamente
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *                 email:
 *                   type: string
 *                   example: guillermo@gmail.com
 *       400:
 *         description: Error de registro
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: USER_ALREADY_EXISTS | USER_RESPOSITORY_EXCEPTION
 */
router.post("/user/register", userController.registerUser);
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         example: Andres
 *                       email:
 *                         type: string
 *                         example: felipe@gmail.com
 *                       id:
 *                         type: integer
 *                         example: 3
 *       400:
 *         description: Error al obtener usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: USER_RESPOSITORY_EXCEPTION
 */
router.get("/users", authenticateToken, userController.getUsers);
/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Actualizar un usuario existente
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Andres
 *               password:
 *                 type: string
 *                 example: 54321qas
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuario actualizado exitosamente
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 3
 *                     name:
 *                       type: string
 *                       example: Andres
 *                     email:
 *                       type: string
 *                       example: felipe@gmail.com
 *       400:
 *         description: Faltan datos necesarios o ID inválido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Missing user ID
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: USER_NOT_EXISTS
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: USER_RESPOSITORY_EXCEPTION
 */
router.put("/user/:id", authenticateToken, userController.updateUser);
/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Eliminar un usuario por ID
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario a eliminar
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuario eliminado exitosamente
 *       400:
 *         description: ID de usuario faltante o inválido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Missing user ID
 *       500:
 *         description: Error en el repositorio al eliminar el usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: USER_RESPOSITORY_EXCEPTION
 */
router.delete("/user/:id", authenticateToken, userController.deleteUser);

export default router;
