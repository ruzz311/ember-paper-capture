import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
  title       : DS.attr('string'),
  description : DS.attr('string'),
  dateEnd     : DS.attr('date'),
  dateStart   : DS.attr('date'),
  images      : DS.attr('attachments', {
    defaultValue : function () {
      return [];
    }
  })
});
