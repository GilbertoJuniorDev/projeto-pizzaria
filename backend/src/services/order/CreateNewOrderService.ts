import prismaClient from "../../prisma";

interface OrderRequest {
  table: number;
  name: string;
}

class CreateNewOrderService {
  async execute({ table, name }: OrderRequest) {
    const order = await prismaClient.order.create({
      data: {
        table: table,
        name: name,
      },
    });

    return order;
  }
}
export { CreateNewOrderService };
