-- CreateTable
CREATE TABLE "cart" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME
);

-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "price" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cartId" TEXT,
    CONSTRAINT "product_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "cart" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
