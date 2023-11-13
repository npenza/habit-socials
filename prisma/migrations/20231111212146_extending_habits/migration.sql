/*
  Warnings:

  - You are about to drop the column `message` on the `Habit` table. All the data in the column will be lost.
  - Added the required column `action` to the `Habit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Habit` DROP COLUMN `message`,
    ADD COLUMN `action` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Frequency` (
    `id` VARCHAR(191) NOT NULL,
    `type` ENUM('Daily', 'Weekly', 'Monthly') NOT NULL,
    `count` INTEGER NOT NULL,
    `habitId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Frequency_habitId_key`(`habitId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HabitLog` (
    `id` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `status` ENUM('Success', 'Fail') NOT NULL,
    `habitId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Frequency` ADD CONSTRAINT `Frequency_habitId_fkey` FOREIGN KEY (`habitId`) REFERENCES `Habit`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HabitLog` ADD CONSTRAINT `HabitLog_habitId_fkey` FOREIGN KEY (`habitId`) REFERENCES `Habit`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
