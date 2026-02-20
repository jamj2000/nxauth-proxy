import prisma from '@/lib/prisma'

export async function getUserById(id) {
  const user = await prisma.user.findUnique({
    where: { id },
    include: { accounts: true }
  });
  return user
}

export async function getUserByEmail(email) {
  const user = await prisma.user.findUnique({
    where: { email },
    include: { accounts: true }
  });
  return user
}