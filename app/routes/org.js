import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return $.get(`https://api.github.com/orgs/${params.id}`).then(org => Object.assign({}, org, {
      oldId: org.id,
      id: params.id
    }))
  },

  authentication: Ember.inject.service(),

  setupController(controller) {
    this._super(...arguments);
    controller.set('records', this.get('authentication.records'));
  },

  actions: {
    addToRecords(value) {
      this.get('authentication.records').addObject({id: value})
    }
  }

});
