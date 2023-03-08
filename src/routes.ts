import { PrismaClient } from "@prisma/client";
import { Router } from "express";

import CreateCartController from "./controllers/create-cart-controller";
import { CartRepository } from "./repository/cart-repository";
import { CreateCartService } from "./services/create-cart.service";

const cartRepository = new CartRepository();
const createCartServive = new CreateCartService(new PrismaClient());
const createCartController = new CreateCartController();

//
const router = Router();

const prisma = new PrismaClient();
router.post("/cart-products/create", createCartController.store);

/*
router.post("/cart-products/create", async (req, res) => {
  const { productName, productDescription, productPrice } = req.body;

  const a = await prisma.cart.create({
    data: {
      product_description: productDescription,
      product_price: productPrice,
      produt_name: productName,
    },
  });

  return res.status(201).json({ a });
});

 */

router.get("/cart-products", async (req, res) => {
  return res.json({ message: "Ola, mundo" });
});

export default router;
