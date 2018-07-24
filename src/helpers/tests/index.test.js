import { sortCollectionByIds } from '../index';

describe('helpers', () => {
  describe('sortCollectionByids', () => {
    const collection = [
      {
        id: '2',
        name: 'second',
      },
      {
        id: '1',
        name: 'first',
      },
      {
        id: '3',
        name: 'third',
      }
    ];

    const sortedIds = ['3', '2', '1'];

    it('exports a function', () => {
      expect(sortCollectionByIds).toBeInstanceOf(Function);
    });

    it('throws an error when no args are given', () => {
      expect(() => sortCollectionByIds()).toThrowError();
    });

    it('throws an error when only a first argument is given', () => {
      expect(() => sortCollectionByIds(collection)).toThrowError();
    });

    it('throws an error when the first argument is not an array', () => {
      expect(
        () => sortCollectionByIds('some string arg', sortedIds),
      ).toThrowError();
    });

    it('throws an error when the second argument is not an array', () => {
      expect(
        () => sortCollectionByIds(collection, 'some string arg'),
      ).toThrowError();
    });

    it('sorts a collection according to passed sorted ids', () => {
      const expectedCollection = [
        collection[2],
        collection[1],
        collection[0],
      ];

      const caseSortedIds = expectedCollection.map(({ id }) => id);

      expect(
        sortCollectionByIds(collection, caseSortedIds),
      ).toEqual(expectedCollection);
    });
  });
});