import { Router } from "express";

import CategoryController from "./controllers/category/category.controller";
import OrderController from "./controllers/order/order.controller";
import ProductController from "./controllers/product/product.controller";
import UserController from "./controllers/user/user.controller";
import { CategoryRepository } from "./repository/category.repository";
import OrderRepository from "./repository/order.repository";
import ProductRepository from "./repository/product.repository";
import UserRepository from "./repository/user.repository";
import CategoryService from "./services/category/category.service";
import OrderService from "./services/order/order.service";
import ProductService from "./services/product/product.service";
import UserService from "./services/user/user.service";

const categoryRepo = new CategoryRepository();
const categoryService = new CategoryService(categoryRepo);
const categoryController = new CategoryController(categoryService);

const productRepo = new ProductRepository();
const productService = new ProductService(productRepo);
const productController = new ProductController(productService);

const orderRepo = new OrderRepository();
const orderService = new OrderService(orderRepo);
const orderController = new OrderController(orderService);

const userRepo = new UserRepository();
const userService = new UserService(userRepo);
const userController = new UserController(userService);

export const routes = Router();

routes.get("/categories", categoryController.show.bind(categoryController));
routes.post("/categories", categoryController.save.bind(categoryController));
routes.delete(
  "/category/:id",
  categoryController.delete.bind(categoryController)
);
// products
routes.get("/products", productController.getProducts.bind(productController));
routes.post("/products", productController.save.bind(productController));
routes.get(
  "/product/:id",
  productController.getProductById.bind(productController)
);

// orders
routes.get("/orders", orderController.getOrders.bind(orderController));
routes.post("/orders", orderController.createOrder.bind(orderController));
routes.patch(
  "/order/:id",
  orderController.updateOrderStatus.bind(orderController)
);

routes.patch(
  "/order/:id/quantity",
  orderController.updateOrderQuantity.bind(orderController)
);
routes.delete("/order/:id", orderController.delete.bind(orderController));
routes.get("/order/:id", orderController.getOrderById.bind(orderController));

// users
routes.post("/users", userController.save.bind(userController));
routes.get("/users", userController.findAll.bind(userController));
routes.get("/user/:id", userController.findById.bind(userController));
routes.delete("/user/:id", userController.delete.bind(userController));
