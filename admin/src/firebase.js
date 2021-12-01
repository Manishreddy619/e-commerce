// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCMQSrxJKpQDBkUKN648Km-tCuuOvBKFg0',
	authDomain: 'e-commerce-3be16.firebaseapp.com',
	projectId: 'e-commerce-3be16',
	storageBucket: 'e-commerce-3be16.appspot.com',
	messagingSenderId: '1034065697315',
	appId: '1:1034065697315:web:b8027ce7b2f1e03e37af96',
	measurementId: 'G-WD0QQMQ7PT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// const analytics = getAnalytics(app);
