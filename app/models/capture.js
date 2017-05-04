import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
  user        : DS.attr('number'),
  title       : DS.attr('string'),
  description : DS.attr('string'),
  date        : DS.attr('date'),
  images      : DS.attr('attachments', {
    defaultValue : function () {
      return [];
    }
  })
});
