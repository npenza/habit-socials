-- AlterTable
ALTER TABLE `HabitLog` MODIFY `status` ENUM('Success', 'Fail', 'Empty') NOT NULL DEFAULT 'Empty';
