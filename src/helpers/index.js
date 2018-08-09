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

/**
 * Turns experience dates into milliseconds
 *
 * @param {object} experience
 * @param {object} experience.startDate
 * @param {object} experience.endDate
 *
 * @returns {number} Date in milliseconds
 */
export function mapExperiences(experiences) {
  return experiences.map((experience) => {
    const mappedExperience = experience;
    const { startDate, endDate } = experience;

    switch (typeof startDate) {
      case 'object':
        mappedExperience.startDate = timestampToMsec(startDate);
        break;
      case 'string':
        mappedExperience.startDate = startDate;
        break;
      default:
        mapExperiences.startDate = '';
    }

    switch (typeof endDate) {
      case 'object':
        mappedExperience.endDate = timestampToMsec(endDate);
        break;
      case 'string':
        mappedExperience.endDate = endDate;
        break;
      default:
        mapExperiences.endDate = '';
    }

    return mappedExperience;
  });
}

/**
 * Turns timestamp into milliseconds
 *
 * @param {object} timestamp
 * @param {number} timestamp.seconds
 *
 * @returns {number}
 */
export function timestampToMsec({ seconds }) {
  return seconds * 1000;
}