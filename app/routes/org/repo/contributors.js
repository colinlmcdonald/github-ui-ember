import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let orgId = this.modelFor('org').id;
    let repoName = this.modelFor('org.repo').repoid;
    return $.get(`https://api.github.com/repos/${orgId}/${repoName}/contributors`).then(contributors => contributors)
  }
});
