import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('orgs', function() {
    model() {
      return ['facebook', 'google', 'stripe', 'punks']
    }
  });

  this.route('org', function() {
    this.route('emberjs');
  });
});

export default Router;
