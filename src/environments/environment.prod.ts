import { firebaseConfigDetails } from './configs';

export const environment = {
	production: true,
	firebaseConfig: {
		apiKey: firebaseConfigDetails.apiKey,
		authDomain: firebaseConfigDetails.authDomain,
		projectId: firebaseConfigDetails.projectId,
		storageBucket: firebaseConfigDetails.storageBucket,
		messagingSenderId: firebaseConfigDetails.messagingSenderId,
		appId: firebaseConfigDetails.appId,
	},
};
