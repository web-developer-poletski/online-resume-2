import firebase from 'firebase/app';
import 'firebase/firestore';

export default class Firebase {
  constructor({ firebaseAppConfig, resumeConfig } = {}) {
    // Store resume config
    this.resumeConfig = resumeConfig;

    // Initialize firebase app
    this.app = firebase.initializeApp(firebaseAppConfig);

    // Initialize firebase database
    this.firestore = firebase.firestore();
    this.firestore.settings({ timestampsInSnapshots: true });
  }

  set resumeConfig(config) {
    this._resumeConfig = config;
  }

  get resumeConfig() {
    return this._resumeConfig;
  }

  get resumeCollectionsNames() {
    return this.resumeConfig.collectionsNames;
  }

  getResume = async () => {
    const { getCollection, resumeCollectionsNames } = this;
    const promises = [];

    // Create a set of asynchronous requests
    // to fetch collections constituting resume
    resumeCollectionsNames.forEach((collectionName) => {
      promises.push(getCollection({ collection: collectionName }));
    });

    // Wait for all the server responses
    const resumeCollections = await Promise.all(promises);

    // Map retrieved resume data to an object
    return resumeCollections.reduce((accObj, collection, indx) => {
      const nextAccObj = accObj;
      nextAccObj[resumeCollectionsNames[indx]] = collection;
      return nextAccObj;
    }, {});
  }

  getCollection = ({ collection = null } = {}) => {
    if (!collection) { return Promise.resolve([])};

    return this.firestore.collection(collection)
      .get()
      .then((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => docs.push(doc.data()));
        return docs;
      });
  }
}