import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { isAuthorized } from "./middlewares/isAuthorized";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateNewOrderController } from "./controllers/order/CreateNewOrderController";

import uploadConfig from "./config/multer";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrderController } from "./controllers/order/ListOrderController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";

import { FinishOrderController } from "./controllers/order/FinishOrderController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// -- Rotas User --
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthorized, new DetailUserController().handle);
// ----------------
//-- Rotas Category
router.post("/category", isAuthorized, new CreateCategoryController().handle);
router.get("/category", isAuthorized, new ListCategoryController().handle);
// ----------------
//-- Rotas Products
router.post(
  "/product",
  isAuthorized,
  upload.single("file"),
  new CreateProductController().handle
);

router.get(
  "/category/product",
  isAuthorized,
  new ListByCategoryController().handle
);
// ----------------
//-- Rotas Orders
router.post("/order", isAuthorized, new CreateNewOrderController().handle);
router.delete("/order", isAuthorized, new RemoveOrderController().handle);

router.post("/order/add", isAuthorized, new AddItemController().handle);
router.delete("/order/remove", isAuthorized, new RemoveItemController().handle);

router.put("/order/send", isAuthorized, new SendOrderController().handle);
router.get("/order", isAuthorized, new ListOrderController().handle);
router.get("/order/detail", isAuthorized, new DetailOrderController().handle);

router.put("/order/finish", isAuthorized, new FinishOrderController().handle);
// ----------------
export { router };
