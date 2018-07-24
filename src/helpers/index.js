export function sortCollectionByIds(collection, sortedIds) {
  return sortedIds.map((sortedId) => collection.find(({ id }) => id === sortedId));
}