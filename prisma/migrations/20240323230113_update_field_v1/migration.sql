/*
  Warnings:

  - Added the required column `quantity` to the `itemOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_orderBy_fkey`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_categoryId_fkey`;

-- AlterTable
ALTER TABLE `itemorder` ADD COLUMN `quantity` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `order` MODIFY `orderBy` INTEGER NULL;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `color` VARCHAR(191) NOT NULL,
    ADD COLUMN `size` INTEGER NOT NULL,
    MODIFY `imageUrl` VARCHAR(191) NULL,
    MODIFY `categoryId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_orderBy_fkey` FOREIGN KEY (`orderBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
