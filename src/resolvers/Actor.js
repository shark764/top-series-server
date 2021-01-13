const resolver = {
  series: async (parent, args, context) => {
    return context.prisma.actor
      .findUnique({ where: { id: parent.id } })
      .series();
  },
};

module.exports = resolver;
