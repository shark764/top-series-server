const DateTime = require('./DateTime');

const Query = require('./Query');
const Mutation = require('./Mutation');

const Subscription = require('./Subscription');

const Category = require('./Category');
const Service = require('./Service');
const Serie = require('./Serie');
const Actor = require('./Actor');
const Cast = require('./Cast');

const resolvers = {
  DateTime,
  Query,
  Mutation,
  Subscription,
  Category,
  Service,
  Serie,
  Actor,
  Cast,
};

module.exports = resolvers;
