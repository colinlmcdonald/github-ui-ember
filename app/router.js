import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('', {path: 'orgs'});
  this.route('home');
  this.route('orgs');
  this.route('org', {path: 'org/:id'}, function() {
    this.route('repo', {path: ':repoid'}, function() {
      this.route('issues');
      this.route('contributors');
    });
    this.route('repos');
  });
  this.route('notfound', {path: '*path'});
});

export default Router;
