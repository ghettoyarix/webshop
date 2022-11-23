import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAa2UnvnssS7FTkwwaB1Mq6C0we6-onbyg',
  authDomain: 'webshop-dev-51755.firebaseapp.com',
  projectId: 'webshop-dev-51755',
  storageBucket: 'webshop-dev-51755.appspot.com',
  messagingSenderId: '962223131047',
  appId: '1:962223131047:web:361f90b7d6856818d58e82',
  measurementId: 'G-BTC2GZ10RB',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
console.log({ auth });
export default app;
export { auth };
