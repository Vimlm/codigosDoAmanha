import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async  function inserirUsuario() {
  const usuario = await prisma.usuario.create({
    data: {
      nome: "Joãozim Da 12",
      cpf: "99966633300",
      email: "Jão@balão.com"
    }
  })
  console.log(`Usuário ${usuario.nome} inserido com sucesso. 🎉`)
}

async function mostrarUsuarios() {
  const mostrarUsuarios = await prisma.usuario.findMany()

  return mostrarUsuarios;
}

async function updateUsuario() {
  const update = await prisma.usuario.update({
    data: {
      where: { id: 1 }
    }
  })
}

inserirUsuario()
 
// console.log(mostrarUsuarios())