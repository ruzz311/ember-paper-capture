import { Adapter } from 'ember-pouch';
import PouchDB from 'pouchdb';
import config from 'ember-paper-capture/config/environment';
import Ember from 'ember';

const { assert, isEmpty } = Ember;

function createDb() {
  let localDb = config.emberPouch.localDb;

  assert('emberPouch.localDb must be set', !isEmpty(localDb));

  let db = new PouchDB(localDb);

  if (config.emberPouch.remoteDb) {
    let remoteDb = new PouchDB(config.emberPouch.remoteDb);

    db.sync(remoteDb, {
      live  : true,
      retry : true
    });
  }

  db.createIndex({
    index : {
      fields : ['data.id', 'data.model']
    }
  }).then((result) => {
    // {'result': 'created'} index was created
    Ember.debug(`db.createIndex success: ${result.result}`);
  });

  return db;
}

export default Adapter.extend({
  init() {
    this._super(...arguments);
    this.set('db', createDb());
  }
});
