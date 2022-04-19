import { initializeApp } from "firebase/app";
import 	"firebase/auth";
import Constants from 'expo-constants';
//import {...} from "firebase/database";
//import {...} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: Constants.manifest?.extra?.firebaseApiKey,
	authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
	projectId: Constants.manifest?.extra?.firebaseProjectId,
	storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
	messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
	appId: Constants.manifest?.extra?.firebaseAppId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;