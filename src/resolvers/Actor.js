const resolver = {
  cast: async (parent, args, context) => {
    return context.prisma.actor.findUnique({ where: { id: parent.id } }).cast();
  },
};

module.exports = resolver;
