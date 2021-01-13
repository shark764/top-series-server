const resolver = {
  serie: async (parent, args, context) => {
    return context.prisma.cast.findUnique({ where: { id: parent.id } }).serie();
  },

  actor: async (parent, args, context) => {
    return context.prisma.cast.findUnique({ where: { id: parent.id } }).actor();
  },
};

module.exports = resolver;
