import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {id: 'facebook'},
      {id: 'colinlmcdonald'},
      {id: 'reactGo'},
      {id: 'freecodecamp'},
      {id: 'yahoo'},
      {id: 'google'},
      {id: 'stupidstupidfucktard'}
    ]
  },

  favorites: Ember.inject.service(),

  setupController(controller) {
    this._super(...arguments);
    controller.set('favorites', this.get('favorites.items'));
  },

  actions: {
    addToFavorites(value) {
      this.get('favorites.items').addObject(value.id)
      console.log(this.get('favorites.items').join(', '));
    }
  }
});
