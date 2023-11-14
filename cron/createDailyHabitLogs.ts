const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createHabitLogs() {
  const habits = await prisma.habit.findMany();
  const today = new Date();

  for (const habit of habits) {
    await prisma.habitLog.create({
      data: {
        habitId: habit.id,
        date: today,
        createdAt: today,
        status: 'Empty',
      },
    });
  }
}

createHabitLogs()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
