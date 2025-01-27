import { prisma } from '@repo/database';
import { NextApiHandler } from 'next';


const userHandler: NextApiHandler = async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

export default userHandler;
