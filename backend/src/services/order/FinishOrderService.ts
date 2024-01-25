import prismaClient from "../../prisma";

interface OrderService {
  order_id: string;
}

class FinishOrderService {
  async execute({ order_id }: OrderService) {
    const order = prismaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        status: true,
      },
    });

    return order;
  }
}

export { FinishOrderService };
