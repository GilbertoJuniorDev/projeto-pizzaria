import { Request, Response } from "express";
import { ListOrderService } from "../../services/order/ListOrderService";

class ListOrderController {
  async handle(req: Request, res: Response) {
    const orderService = new ListOrderService();

    const order = await orderService.execute();

    return res.json(order);
  }
}

export { ListOrderController };
