const resolver = {
  series: async (parent, args, context) => {
    return context.prisma.category
      .findUnique({ where: { id: parent.id } })
      .series();
  },
};

module.exports = resolver;
