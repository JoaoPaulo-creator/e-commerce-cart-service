/*
  Warnings:

  - Added the required column `total` to the `cart` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cart" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "quantity" INTEGER NOT NULL,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME,
    "total" REAL NOT NULL
);
INSERT INTO "new_cart" ("created_at", "id", "quantity", "updated_at") SELECT "created_at", "id", "quantity", "updated_at" FROM "cart";
DROP TABLE "cart";
ALTER TABLE "new_cart" RENAME TO "cart";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
