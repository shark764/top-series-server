const resolver = {
  // Categories
  addCategory: async (parent, args, context) => {
    const newCategory = context.prisma.category.create({
      data: {
        name: args.name,
      },
    });
    context.pubsub.publish('NEW_CATEGORY', newCategory);

    return newCategory;
  },
  updateCategory: async (parent, args, context) => {
    const id = parseInt(args.id, 10);
    const updatedCategory = context.prisma.category.update({
      where: { id },
      data: {
        name: args.name,
        updatedAt: new Date(),
      },
    });
    context.pubsub.publish('UPDATED_CATEGORY', updatedCategory);

    return updatedCategory;
  },
  removeCategory: async (parent, args, context) => {
    const id = parseInt(args.id, 10);
    const removedCategory = context.prisma.category.delete({
      where: { id },
    });
    context.pubsub.publish('REMOVED_CATEGORY', removedCategory);

    return removedCategory;
  },

  // Services
  addService: async (parent, args, context) => {
    const newService = context.prisma.service.create({
      data: {
        name: args.name,
      },
    });
    context.pubsub.publish('NEW_SERVICE', newService);

    return newService;
  },
  updateService: async (parent, args, context) => {
    const id = parseInt(args.id, 10);
    const updatedService = context.prisma.service.update({
      where: { id },
      data: {
        name: args.name,
        updatedAt: new Date(),
      },
    });
    context.pubsub.publish('UPDATED_SERVICE', updatedService);

    return updatedService;
  },
  removeService: async (parent, args, context) => {
    const id = parseInt(args.id, 10);
    const removedService = context.prisma.service.delete({
      where: { id },
    });
    context.pubsub.publish('REMOVED_SERVICE', removedService);

    return removedService;
  },

  // Series
  addSerie: async (parent, args, context) => {
    const newSerie = context.prisma.serie.create({
      data: {
        name: args.name,
        description: args.description,
        imageUrl: args.imageUrl,
        category: { connect: { id: Number(args.categoryId) } },
        service: { connect: { id: Number(args.serviceId) } },
      },
    });
    context.pubsub.publish('NEW_SERIE', newSerie);

    return newSerie;
  },
  updateSerie: async (parent, args, context) => {
    const id = parseInt(args.id, 10);
    const updatedSerie = context.prisma.serie.update({
      where: { id },
      data: {
        name: args.name,
        description: args.description,
        imageUrl: args.imageUrl,
        category: { connect: { id: Number(args.categoryId) } },
        service: { connect: { id: Number(args.serviceId) } },
        updatedAt: new Date(),
      },
    });
    context.pubsub.publish('UPDATED_SERIE', updatedSerie);

    return updatedSerie;
  },
  removeSerie: async (parent, args, context) => {
    const id = parseInt(args.id, 10);
    const removedSerie = context.prisma.serie.delete({
      where: { id },
    });
    context.pubsub.publish('REMOVED_SERIE', removedSerie);

    return removedSerie;
  },

  // Actors
  addActor: async (parent, args, context) => {
    const newActor = context.prisma.actor.create({
      data: {
        name: args.name,
        imageUrl: args.imageUrl,
      },
    });
    context.pubsub.publish('NEW_ACTOR', newActor);

    return newActor;
  },
  updateActor: async (parent, args, context) => {
    const id = parseInt(args.id, 10);
    const updatedActor = context.prisma.actor.update({
      where: { id },
      data: {
        name: args.name,
        imageUrl: args.imageUrl,
        updatedAt: new Date(),
      },
    });
    context.pubsub.publish('UPDATED_ACTOR', updatedActor);

    return updatedActor;
  },
  removeActor: async (parent, args, context) => {
    const id = parseInt(args.id, 10);
    const removedActor = context.prisma.actor.delete({
      where: { id },
    });
    context.pubsub.publish('REMOVED_ACTOR', removedActor);

    return removedActor;
  },

  // Casts
  addCast: async (parent, args, context) => {
    const inCast = await context.prisma.cast.findUnique({
      where: {
        actorId_serieId: {
          actorId: Number(args.actorId),
          serieId: Number(args.serieId),
        },
      },
    });

    if (Boolean(inCast)) {
      throw new Error(
        `The actor: "${args.actorId}" is already part of the cast.`
      );
    }

    const newCast = context.prisma.cast.create({
      data: {
        actor: { connect: { id: Number(args.actorId) } },
        serie: { connect: { id: Number(args.serieId) } },
      },
    });
    context.pubsub.publish('NEW_CAST', newCast);

    return newCast;
  },
  updateCast: async (parent, args, context) => {
    const inCast = await context.prisma.cast.findUnique({
      where: {
        actorId_serieId: {
          actorId: Number(args.actorId),
          serieId: Number(args.serieId),
        },
      },
    });

    if (Boolean(inCast)) {
      throw new Error(
        `The actor: "${args.actorId}" is already part of the cast.`
      );
    }

    const id = parseInt(args.id, 10);
    const updatedCast = context.prisma.cast.update({
      where: { id },
      data: {
        actor: { connect: { id: Number(args.actorId) } },
        serie: { connect: { id: Number(args.serieId) } },
      },
    });
    context.pubsub.publish('UPDATED_CAST', updatedCast);

    return updatedCast;
  },
  removeCast: async (parent, args, context) => {
    const id = parseInt(args.id, 10);
    const removedCast = context.prisma.cast.delete({
      where: { id },
    });
    context.pubsub.publish('REMOVED_CAST', removedCast);

    return removedCast;
  },
};

module.exports = resolver;
