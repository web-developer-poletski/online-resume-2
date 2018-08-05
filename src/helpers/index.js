export { media } from './styledComponents';

/**
 * Sorts a collection of items containing "id" property
 * to mirror the order of ids in an array passed as the second argument
 *
 * @param {array} collection Items collection (objects with a property "id")
 * @param {array} sortedIds Sorted items ids
 * 
 * @returns {array} New array with the sorted by ids collection
 */
export function sortCollectionByIds(collection, sortedIds) {
  return sortedIds.map((sortedId) => collection.find(({ id }) => id === sortedId));
}