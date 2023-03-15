import { Request, Response, Router } from "express";
import "reflect-metadata";
import { container } from "tsyringe";

export const routes = Router();

import CategoryController from "./controllers/category/category.controller";
import OrderController from "./controllers/order/order.controller";

const categoryController: CategoryController =
  container.resolve<CategoryController>(CategoryController);

routes.post("/categories", (req: Request, res: Response) =>
  categoryController.save(req, res)
);

routes.get("/categories", (req: Request, res: Response) =>
  categoryController.show(req, res)
);

const orderControllerResolver: OrderController =
  container.resolve<OrderController>(OrderController);

routes.post("/orders", (req: Request, res: Response) =>
  orderControllerResolver.createOrder(req, res)
);

routes.get("/orders", (req: Request, res: Response) =>
  orderControllerResolver.getOrders(req, res)
);

import productController from "./controllers/product/product.controller";

routes.post("/products", productController.createProduct);
routes.get("/products", productController.getProducts);
