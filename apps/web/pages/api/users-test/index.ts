import { Campaign, Node, prisma, User } from '@repo/database';
import { NextApiHandler } from 'next';


export type FetchCampaignResponse = Campaign &
  {
    users?: User[];
    nodes?: Node[];
  }[];

const fetchUsers: NextApiHandler = async (_, res) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.status(200).json(allUsers);
  } catch (error) {
    console.error(error);
   	res.status(500).json(error)
  }
};

export default fetchUsers;
