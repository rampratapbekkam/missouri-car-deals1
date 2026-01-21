// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAeobKctocdqHWppK3tHUFL4kWBFPHc7b4",
  authDomain: "missouri-car-deals.firebaseapp.com",
  projectId: "missouri-car-deals",
  storageBucket: "missouri-car-deals.appspot.com",
  messagingSenderId: "111243981140",
  appId: "1:111243981140:web:94ddfecec16ab8ee0518c1"
};

// Initialize Firebase only once
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
