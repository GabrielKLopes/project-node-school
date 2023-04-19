import { Router, request, response } from "express";
import { getCardAll, getCardById, removeCard, saveCard, updateCard } from "./creditCard";
import { authorization, getUserAll, getUserById, removeUser, saveUser, updateUser } from "./user";
import { authorizationMiddleware } from "../middlewares/authorization.middleware";


const router = Router();



router.get('/card', authorizationMiddleware,  getCardAll)
router.get('/card/:id',authorizationMiddleware,  getCardById)
router.post('/card',authorizationMiddleware, saveCard)
router.put('/card/:id',authorizationMiddleware, updateCard)
router.delete('/card/:id',authorizationMiddleware,  removeCard)

router.get('/user', authorizationMiddleware, getUserAll)
router.get('/user/:id',authorizationMiddleware, getUserById)
router.post('/user',saveUser)
router.post('/user/authorization',authorization)
router.put('/user/:id',authorizationMiddleware, updateUser)
router.delete('/user/:id',authorizationMiddleware, removeUser)


export default router;