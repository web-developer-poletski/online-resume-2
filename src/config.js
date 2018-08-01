const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_DATABASE_URL,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID,
} = process.env;

export const firebaseAppConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID
}

export const appConfig = {
  navItems: [
    {
      title: 'Personal',
      link: '#personal',
    },
    {
      title: 'Abilities',
      link: '#abilities',
    },
    {
      title: 'Careers',
      link: '#careers',
    },
    {
      title: 'Educations',
      link: '#educations',
    },
    {
      title: 'Projects',
      link: '#projects',
    },
    {
      title: 'Socials',
      link: '#socials',
    },
  ],
}

export const resumeConfig = {
  collectionsNames: [
    'collections_meta',
    'personal_info',
    'careers',
    'educations',
    'projects',
    'socials',
    'technical_skills',
  ],
}