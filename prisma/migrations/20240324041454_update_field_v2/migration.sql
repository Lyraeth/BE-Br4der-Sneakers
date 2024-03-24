/*
  Warnings:

  - You are about to drop the column `color` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `color`,
    DROP COLUMN `size`;
