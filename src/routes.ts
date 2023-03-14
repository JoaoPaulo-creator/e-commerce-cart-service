import { Request, Response, Router } from "express";
import "reflect-metadata";
import { container } from "tsyringe";
import CreateCartController from "./controllers/cart/create-cart.controller";
import DeleteCartController from "./controllers/cart/delete-cart.controller";
import GetAllItemsCartController from "./controllers/cart/get-all-items-cart.controller";
import UpdateCartController from "./controllers/cart/update-cart.controller";

export const routes = Router();

const createController: CreateCartController =
  container.resolve<CreateCartController>(CreateCartController);

const updateController: UpdateCartController =
  container.resolve<UpdateCartController>(UpdateCartController);

const getController: GetAllItemsCartController =
  container.resolve<GetAllItemsCartController>(GetAllItemsCartController);

const deleteController: DeleteCartController =
  container.resolve<DeleteCartController>(DeleteCartController);

routes.post("/cart-products/create", (req: Request, res: Response) =>
  createController.store(req, res)
);

routes.put("/cart/:id/product", (req: Request, res: Response) =>
  updateController.update(req, res)
);

routes.get("/cart-products", (req: Request, res: Response) =>
  getController.findAll(req, res)
);

routes.delete("/cart/:id", (req: Request, res: Response) =>
  deleteController.deleteCartById(req, res)
);

import CategoryController from "./controllers/category/category.controller";

routes.post("/categories", CategoryController.save);

import orderController from "./controllers/order/order.controller";

routes.post("/orders", orderController.createOrder);

import productController from "./controllers/product/product.controller";

routes.post("/products", productController.createProduct);
