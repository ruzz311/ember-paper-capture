import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('capture', {
      limit: 20,
      offset: 0
    })
      .then(function (result) {
        // yo, a result
        return {
          captures: result,
          meta: result.meta || {}
        };
      })
      .catch(function (err) {
        console.error(err);
        return {
          captures: Ember.A(),
          meta: {}
        };
      });

    // return this.get('store')
    //   .query('capture', {
    //     name: 'capture',
    //     limit : 10,
    //     offset : 0
    //   })
    //   .then(results => {
    //     return {
    //       captures : results,
    //       meta     : results.meta
    //     };
    //   });
  }
});
