import prismaClient from "../../prisma";

interface DetailService {
  order_id: string;
}

class DetailOrderService {
  async execute({ order_id }: DetailService) {
    const item = prismaClient.item.findMany({
      where: {
        order_id: order_id,
      },
      include: {
        product: true,
        order: true,
      },
    });

    return item;
  }
}

export { DetailOrderService };
