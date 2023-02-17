import { iUser } from "../../interfaces/users.interfaces";
import * as express from 'express'

declare global {
    namespace Express {
      interface Request {
          email: Pick<iUser, "email">
      }
    }
  }