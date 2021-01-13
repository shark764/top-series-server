const resolver = {
  category: async (parent, args, context) => {
    return context.prisma.serie
      .findUnique({ where: { id: parent.id } })
      .category();
  },

  service: async (parent, args, context) => {
    return context.prisma.serie
      .findUnique({ where: { id: parent.id } })
      .service();
  },

  cast: async (parent, args, context) => {
    return context.prisma.serie.findUnique({ where: { id: parent.id } }).cast();
  },
};

module.exports = resolver;
