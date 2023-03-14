import { container } from "tsyringe";
import CreateCartController from "../controllers/cart/create-cart.controller";
import DeleteCartController from "../controllers/cart/delete-cart.controller";
import GetAllItemsCartController from "../controllers/cart/get-all-items-cart.controller";
import UpdateCartController from "../controllers/cart/update-cart.controller";

export const createController: CreateCartController =
  container.resolve<CreateCartController>(CreateCartController);

export const updateController: UpdateCartController =
  container.resolve<UpdateCartController>(UpdateCartController);

export const getController: GetAllItemsCartController =
  container.resolve<GetAllItemsCartController>(GetAllItemsCartController);

export const deleteController: DeleteCartController =
  container.resolve<DeleteCartController>(DeleteCartController);
