// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
export const environment = {
  production: false,
  firebaseConfig : {
  apiKey: 'AIzaSyAOnd5SvbtlK-fqytyKRS58MQUHDYPg8Gw',
  authDomain: 'spotifyapp-d0f16.firebaseapp.com',
  projectId: 'spotifyapp-d0f16',
  storageBucket: 'spotifyapp-d0f16.appspot.com',
  messagingSenderId: '891421535477',
  appId: '1:891421535477:web:58d00363ea1e4178d6e9bc'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
