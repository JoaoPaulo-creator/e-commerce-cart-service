/*
  Warnings:

  - Added the required column `quantity` to the `cart` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cart" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "quantity" INTEGER NOT NULL,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME
);
INSERT INTO "new_cart" ("created_at", "id", "updated_at") SELECT "created_at", "id", "updated_at" FROM "cart";
DROP TABLE "cart";
ALTER TABLE "new_cart" RENAME TO "cart";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
