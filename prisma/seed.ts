import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function setExperienceOfLevel(level: number) {
  return 1 * level ** 2 + 3 * level + 2;
}

async function seedData() {
  let i = 1;
  while (i < 100) {
    const res = await prisma.level.create({
      data: {
        level: i,
        maxExperience: setExperienceOfLevel(i++),
      },
    });
    console.log(res);
  }
}

async function main() {
  await seedData();
}

main()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
