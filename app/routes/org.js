import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return $.get(`https://api.github.com/orgs/${params.id}`)
      .then(org => Object.assign({}, org, {
        oldId: org.id,
        id: params.id
      }))
  },

  actions: {
    error(err) {
      if (err.status === 404) {
        this.intermediateTransitionTo('org.notfound')
      } else {
        return true; //bubble up
      }
    }
  }

});
