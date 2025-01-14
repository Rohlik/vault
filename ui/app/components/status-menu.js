import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  currentCluster: service('current-cluster'),
  cluster: alias('currentCluster.cluster'),
  auth: service(),
  media: service(),
  type: 'cluster',
  itemTag: null,
  glyphName: computed('type', function() {
    return {
      cluster: 'circle-dot',
      user: 'user',
    }[this.type];
  }),
});
