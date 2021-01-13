const subscriptionResolver = (sSub) => {
  return {
    subscribe: (parent, args, context, info) => {
      return context.pubsub.asyncIterator(sSub);
    },
    resolve: (payload) => {
      return payload;
    },
  };
};

const resolver = {
  // Categories
  newCategory: subscriptionResolver('NEW_CATEGORY'),
  updatedCategory: subscriptionResolver('UPDATED_CATEGORY'),
  removedCategory: subscriptionResolver('REMOVED_CATEGORY'),

  // Services
  newService: subscriptionResolver('NEW_SERVICE'),
  updatedService: subscriptionResolver('UPDATED_SERVICE'),
  removedService: subscriptionResolver('REMOVED_SERVICE'),

  // Series
  newSerie: subscriptionResolver('NEW_SERIE'),
  updatedSerie: subscriptionResolver('UPDATED_SERIE'),
  removedSerie: subscriptionResolver('REMOVED_SERIE'),

  // Actors
  newActor: subscriptionResolver('NEW_ACTOR'),
  updatedActor: subscriptionResolver('UPDATED_ACTOR'),
  removedActor: subscriptionResolver('REMOVED_ACTOR'),

  // Casts
  newCast: subscriptionResolver('NEW_CAST'),
  updatedCast: subscriptionResolver('UPDATED_CAST'),
  removedCast: subscriptionResolver('REMOVED_CAST'),
};

module.exports = resolver;
