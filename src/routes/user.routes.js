const { PrismaClient } = require('@prisma/client')

const express = require('express')
const prisma = new PrismaClient()

const userRoutes = express.Router()

//CREATE

userRoutes.post('/user', async (request, response) => {
  const { name, login, password } = request.body
  const insertNewUser = await prisma.users.create({
    data: {
      name,
      login,
      password
    }
  })
  // users.push({ name, login, password })
  return response.status(200).json(insertNewUser)
})
//READ

userRoutes.get('/user', async (request, response) => {
  const GetUsers = await prisma.users.findMany()
  return response.status(200).json(GetUsers)
})

//UPDATE
userRoutes.put('/user/:id', async (request, response) => {
  const { id, name, login, password } = await request.body

  if (!id) {
    return response.status(400).json('Error id is mandatory!')
  }

  const UserAlreadyExist = await prisma.users.findUnique({
    where: { id }
  })

  if (!UserAlreadyExist) {
    return response
      .status(404)
      .json('Ooops, this user doesnt exists.')
  }

  const UpdateUser = await prisma.users.update({
    where: {
      id
    },
    data: {
      name,
      login,
      password
    }
  })

  return response.status(200).json(UpdateUser)
})

//DELETE
userRoutes.delete('/user/:id', async (request, response) => {
  const { id } = await request.body

  if (!id) {
    return response.status(400).json('Error, id is mandatory.')
  }

  const ThisUserExists = await prisma.users.findUnique({
    where: { id }
  })

  if (!ThisUserExists) {
    return response.status(404).json('This user doesnt exists.')
  }

  const DeleteUser = await prisma.users.delete({
    where: {
      id
    }
  })

  return response.status(200).json('User deleted succesifuly.')
})

module.exports = userRoutes
