# Plans to migrate from prisma with postgresql to MongoDB with Mongoose

Problems found:
 - It's not possible do create an Order with multiples products. It is necessary to create an Order, then link multiples products if I want to, so does not make any sense
at this time

- Currently, an Order may have only one product linked per order

Again: If I want to link multiple products to an Order, an Order id should be created before, then linked to multiples products