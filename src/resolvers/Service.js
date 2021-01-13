const resolver = {
  series: async (parent, args, context) => {
    return context.prisma.service
      .findUnique({ where: { id: parent.id } })
      .series();
  },
};

module.exports = resolver;
