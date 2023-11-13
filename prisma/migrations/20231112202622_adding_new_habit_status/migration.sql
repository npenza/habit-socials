-- AlterTable
ALTER TABLE `HabitLog` MODIFY `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `status` ENUM('Success', 'Fail', 'Empty') NOT NULL;
