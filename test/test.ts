import assert from 'assert';
import { getRestOfData } from '../src/index';

describe('Array', function() {
  describe('#getRestOfData()', function() {
    it('should return the rest of the data minus type_id and types in string format', function() {
      assert.strictEqual(
        getRestOfData(lineObj), '');
    });
  });
});

const lineObj = {
  entity_id: "15E6516C-ED06-4079-B5B9-2CF0CC1336DE",
  name: "Bebeclub Indonesia",
  types: ["urn:entity:brand"],
  type_synonyms:[],
  data_source: {
    source_id:"bebeclub",
    dataset: "brand",
    data_pull_date: "202012"
  },
  population_percentile: 0.4270138967348322,
};
