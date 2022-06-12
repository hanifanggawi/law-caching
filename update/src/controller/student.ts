import { Student } from '@prisma/client';
import { Request, Response } from 'express';
import { findStudentByNPM, upsertStudent } from '../db/prisma';

export async function getStudent(req: Request, res: Response) {
  const { npm } = req.params
  const student = await findStudentByNPM(npm)
  if (student) {
    return res.status(200).send({
      status: 'OK',
      npm: student.npm,
      nama: student.nama
    })
  } else {
    return res.status(404).send({
      error: 'Student not found'
    })
  }
}

export async function postStudent(req: Request, res: Response) {
  const payload = req.body as Student
  const response = await upsertStudent(payload)
  if (response) {
    return res.status(200).send({ status: 'OK' })
  }
  return res.status(500).send({ error: response })
}