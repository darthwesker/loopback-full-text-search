module.exports = function(app, options) {
  const remotes = app.remotes();

  const applySearch  = function(ctx, next) {
    options.models.map(model => {
      if ((this.name === model.name) && (model.fields)) {
        const fields = ctx.args.filter;
        const query = fields && fields.where;
        let search = {};
        if (query && query.q) {
          if (model.fields.length === 1) {
            search = {[model.fields[0]]: {ilike: `%${query.q}%`}};
          } else {
            let searches = [];
            model.fields.map(field => {
              searches.push({[field]: {ilike: `%${query.q}%`}});
            });
            search = {or: searches};
          }
          delete fields.where.q;
          if (Object.keys(fields.where).length !== 0) {
            search = {and: [search, fields.where]};
          }
          fields.where = search;
          ctx.args.filter = fields;
        }
      }
    });
    next();
  };

  const pattern = ['*.find'];
  for (let i = pattern.length - 1; i >= 0; i--) {
    remotes.before(pattern[i], applySearch);
  }
};
