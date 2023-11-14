/*
  Warnings:

  - You are about to drop the `Frequency` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Frequency` DROP FOREIGN KEY `Frequency_habitId_fkey`;

-- DropTable
DROP TABLE `Frequency`;
