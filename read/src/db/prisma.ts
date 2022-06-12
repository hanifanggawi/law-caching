import { PrismaClient, Student } from '@prisma/client'

const prisma = new PrismaClient()

export async function upsertStudent(student: Student) {
  try {
    return await prisma.student.upsert({
      where: {
        npm: student.npm,
      },
      update: {
        npm: student.npm,
        nama: student.nama
      },
      create: {
        npm: student.npm,
        nama: student.nama,
      }
    })
  } catch (error) {
    return error
  }
}

export async function findStudentByNPM(npm: string) {
  return await prisma.student.findUnique({
    where: {
      npm: npm
    }
  })
}