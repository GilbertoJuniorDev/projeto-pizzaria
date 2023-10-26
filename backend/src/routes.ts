import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { isAuthorized } from "./middlewares/isAuthorized";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";

import uploadConfig from "./config/multer";

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
export { router };
