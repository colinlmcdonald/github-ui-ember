import Ember from 'ember';

export default Ember.Route.extend({

  favorites: Ember.inject.service(),

  setupController(controller) {
    this._super(...arguments);
    controller.set('favorites', this.get('favorites.items'));
  },

  actions: {
    addToFavorites(value) {
      this.get('favorites.items').addObject(value)
      console.log(this.get('favorites.items').join(', '));
    }
  },

  model() {
    return [
      {id: 'emberjs'},
      {id: 'facebook'},
      {id: 'google'},
      {id: 'reactGo'},
      {id: 'colinlmcdonald'}
    ];
  }
});
