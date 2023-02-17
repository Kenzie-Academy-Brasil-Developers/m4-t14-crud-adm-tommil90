import { Request, Response } from "express";
import { iUserRequest, tLogin, tUserUpdateRequest, tUserWithoutPassword } from "../interfaces/users.interfaces"
import { createUsersService } from "../services/users/createUsers.service"
import { createLoginService } from "../services/login/createLogin.service"
import { retrieveUsersListService } from "../services/users/retrieveUsersList.service"
import { updateUserService } from "../services/users/updateUser.service"



export const createUsersController = async (req: Request, res: Response): Promise<Response> => {

    const userData: iUserRequest = req.body

    const newUser: tUserWithoutPassword   = await createUsersService(userData)

    return res.status(201).json(newUser)
}

export const userLoginController = async (req: Request, res: Response): Promise<Response> => {

    const userLogin: tLogin = req.body

    const token: { token: string } = await createLoginService(userLogin)

    return res.status(200).json(token)
}


export const retrieveUsersListController = async (req: Request, res: Response): Promise<Response> => {

    const listUsers = await retrieveUsersListService()

    return res.status(200).json(listUsers)
}

export const updateUserController = async (req: Request, res: Response): Promise<Response> => {

    const userData: tUserUpdateRequest = req.body
    const id: number = Number(req.params.id)

    const User: tUserWithoutPassword   = await updateUserService(userData, id)

    return res.status(200).json(User)
}