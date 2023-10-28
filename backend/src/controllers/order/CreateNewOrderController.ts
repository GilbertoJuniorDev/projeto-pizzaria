import { Request, Response } from "express";

import { CreateNewOrderService } from "../../services/order/CreateNewOrderService";

class CreateNewOrderController {
  async handle(req: Request, res: Response) {
    const { table, name } = req.body;

    const createNewOrderService = new CreateNewOrderService();

    const order = await createNewOrderService.execute({
      table,
      name,
    });

    return res.json(order);
  }
}

export { CreateNewOrderController };
