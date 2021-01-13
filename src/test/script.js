// 1
const { PrismaClient } = require('@prisma/client');

// 2
const prisma = new PrismaClient();

//3
async function main() {
  // await prisma.category.create({ data: { name: 'Science Fiction' } });

  // await prisma.service.create({ data: { name: 'YoutubeTV' } });

  // await prisma.actor.create({
  //   data: {
  //     name: 'Jamie Foxx',
  //     imageUrl:
  //       'https://cdn.britannica.com/68/136168-050-BA0F65B3/Jamie-Foxx-2009.jpg',
  //   },
  // });

  // const allCategories = await prisma.category.findMany();
  // const allServices = await prisma.service.findMany();
  // const allActors = await prisma.actor.findMany();
  const allSeries = await prisma.serie.findMany();

  // await prisma.cast.create({
  //   data: { actor: { connect: { id: 4 } }, serie: { connect: { id: 3 } } },
  // });

  console.log({
    // allCategories,
    // allServices,
    // allActors,
    allSeries,
  });
}

//4
main()
  .catch((e) => {
    throw e;
  })
  // 5
  .finally(async () => {
    await prisma.$disconnect();
  });
