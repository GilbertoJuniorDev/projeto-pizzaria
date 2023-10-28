import { Request, Response } from "express";

import { AddItemService } from "../../services/order/AddItemService";

class AddItemController {
  async handle(req: Request, res: Request) {
    const { order_id, product_id, amount } = req.body;

    const addItemService = new AddItemService();

    const item = await addItemService.execute({
      order_id,
      product_id,
      amount,
    });
  }
}

export { AddItemController };
