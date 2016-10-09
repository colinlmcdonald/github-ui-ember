import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let orgId = this.modelFor('org').id;
    let repoName = this.modelFor('org.repo').repoid;
    return $.get(`https://api.github.com/repos/${orgId}/${repoName}/issues?access_token=556b2fb56c47ed7057517662acf0204e4a10051f`).then(issues => issues)
  }
});
