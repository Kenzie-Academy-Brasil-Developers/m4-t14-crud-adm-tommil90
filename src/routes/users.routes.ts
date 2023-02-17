import { Router } from "express"
import { createUsersController, retrieveUsersListController, updateUserController, userLoginController } from "../controllers/users.controllers" 
import { validateBodyMiddleware, validateTokenMiddleware, verifyEmailExistMiddleware, verifyIdUserMiddleWare } from "../middlewares/users.middlewares"
import { createUserSchema, loginUserSchema, updateUserSchema } from "../schemas/user.schema"


export const userRouter: Router = Router()



userRouter.post("", verifyEmailExistMiddleware, validateBodyMiddleware(createUserSchema), createUsersController)

userRouter.post("/login",validateBodyMiddleware(loginUserSchema), userLoginController)

userRouter.get("", validateTokenMiddleware, retrieveUsersListController)

userRouter.patch("/:id", validateTokenMiddleware, verifyIdUserMiddleWare, verifyEmailExistMiddleware, validateBodyMiddleware(updateUserSchema), updateUserController)