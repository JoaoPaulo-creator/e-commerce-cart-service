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

routes.get("/order/:id", (req: Request, res: Response) =>
  orderControllerResolver.getOrderById(req, res)
);

routes.delete("/order/:id", (req: Request, res: Response) =>
  orderControllerResolver.delete(req, res)
);

routes.patch("/order/:id", (req: Request, res: Response) =>
  orderControllerResolver.updateOrderStatus(req, res)
);

routes.patch("/order/:id/quantity", (req: Request, res: Response) =>
  orderControllerResolver.updateOrderQuantity(req, res)
);

import ProductController from "./controllers/product/product.controller";

const productResolver: ProductController =
  container.resolve<ProductController>(ProductController);

routes.post("/products", (req: Request, res: Response) =>
  productResolver.createProduct(req, res)
);

routes.get("/products", (req: Request, res: Response) =>
  productResolver.getProducts(req, res)
);

routes.delete("/product/:id", (req: Request, res: Response) =>
  productResolver.deleteProduct(req, res)
);
