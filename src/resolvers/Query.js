const resolver = {
  // Categories
  getCategories: async (parent, args, context) => {
    return context.prisma.category.findMany();
  },
  getCategory: async (parent, args, context) => {
    const id = parseInt(args.id, 10);
    return context.prisma.category.findUnique({ where: { id } });
  },

  // Services
  getServices: async (parent, args, context) => {
    return context.prisma.service.findMany();
  },
  getService: async (parent, args, context) => {
    const id = parseInt(args.id, 10);
    return context.prisma.service.findUnique({ where: { id } });
  },

  // Series
  getSeries: async (parent, args, context) => {
    const { filter, skip, take, orderBy } = args;
    const where = filter
      ? {
          OR: [
            { name: { contains: filter } },
            { description: { contains: filter } },
          ],
        }
      : {};

    const series = await context.prisma.serie.findMany({
      where,
      skip,
      take,
      orderBy,
    });
    const count = await context.prisma.serie.count({ where });
    return {
      series,
      count,
    };
  },
  getSerie: async (parent, args, context) => {
    const id = parseInt(args.id, 10);
    return context.prisma.serie.findUnique({ where: { id } });
  },

  // Actors
  getActors: async (parent, args, context) => {
    return context.prisma.actor.findMany();
  },
  getActor: async (parent, args, context) => {
    const id = parseInt(args.id, 10);
    return context.prisma.actor.findUnique({ where: { id } });
  },

  // Casts
  getCasts: async (parent, args, context) => {
    return context.prisma.cast.findMany();
  },
  getCast: async (parent, args, context) => {
    const id = parseInt(args.id, 10);
    return context.prisma.cast.findUnique({ where: { id } });
  },
};

module.exports = resolver;
