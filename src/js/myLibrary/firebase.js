import { initializeApp } from 'firebase/app';
import { getAuth, EmailAuthProvider } from 'firebase/auth';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDAh0--4StEyCvmB2VJ_PH6ONW26JdL9C0',
  authDomain: 'filmoteka-94bd5.firebaseapp.com',
  projectId: 'filmoteka-94bd5',
  storageBucket: 'filmoteka-94bd5.appspot.com',
  messagingSenderId: '831703461405',
  appId: '1:831703461405:web:8e5fcd7e5573f18627a0f4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize FirebaseUI
const ui = new firebaseui.auth.AuthUI(auth);
const uiOptions = {
  signInOptions: [
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
  ],
  callbacks: {
    signInSuccessWithAuthResult: authResult => {},
  },
};

export function openAuth() {
  ui.start('.js-login-ui', uiOptions);
}

export function closeAuth() {
  ui.reset();
}
