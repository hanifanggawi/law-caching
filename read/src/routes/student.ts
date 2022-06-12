import { Router } from "express";
import { getStudent, postStudent } from "../controller/student";

export function studentRouter(): Router {
  const route: Router = Router()

  route.get('/read/:npm', getStudent)
  route.post('/update', postStudent)

  return route
}