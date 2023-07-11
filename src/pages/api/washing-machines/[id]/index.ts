import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { washingMachineValidationSchema } from 'validationSchema/washing-machines';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.washing_machine
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getWashingMachineById();
    case 'PUT':
      return updateWashingMachineById();
    case 'DELETE':
      return deleteWashingMachineById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getWashingMachineById() {
    const data = await prisma.washing_machine.findFirst(convertQueryToPrismaUtil(req.query, 'washing_machine'));
    return res.status(200).json(data);
  }

  async function updateWashingMachineById() {
    await washingMachineValidationSchema.validate(req.body);
    const data = await prisma.washing_machine.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteWashingMachineById() {
    const data = await prisma.washing_machine.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
