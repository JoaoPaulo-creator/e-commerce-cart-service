import { Request, Response, Router } from "express";
import "reflect-metadata";
import { container } from "tsyringe";
import CreateCartController from "./controllers/create-cart.controller";
import GetAllItemsCartController from "./controllers/get-all-items-cart.controller";
export const routes = Router();

const createController: CreateCartController =
  container.resolve<CreateCartController>(CreateCartController);

const getController: GetAllItemsCartController =
  container.resolve<GetAllItemsCartController>(GetAllItemsCartController);

routes.post("/cart-products/create", (req: Request, res: Response) =>
  createController.store(req, res)
);
routes.get("/cart-products", (req: Request, res: Response) =>
  getController.findAll(req, res)
);
