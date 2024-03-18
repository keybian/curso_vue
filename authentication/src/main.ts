import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXz1q1tgSRaR1El_4ev-xlLmIOWRNkrj4",
  authDomain: "curso-vue-74d3e.firebaseapp.com",
  projectId: "curso-vue-74d3e",
  storageBucket: "curso-vue-74d3e.appspot.com",
  messagingSenderId: "493813398438",
  appId: "1:493813398438:web:43c496c71582a6d2e7ad67"
};

// Initialize Firebase
initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
