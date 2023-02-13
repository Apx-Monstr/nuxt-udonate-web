import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
createApp(App).use(router).mount('#app')
import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBI5caGoQyTEhB_zJL4pVM8RXh3S_EcnRo",
    authDomain: "udonate-469ef.firebaseapp.com",
    databaseURL: "https://udonate-469ef-default-rtdb.firebaseio.com",
    projectId: "udonate-469ef",
    storageBucket: "udonate-469ef.appspot.com",
    messagingSenderId: "309966249958",
    appId: "1:309966249958:web:8c39d0f88178f7662a4027",
    measurementId: "G-GGHD3P1B89"
};

firebase.initializeApp(firebaseConfig)
console.log("Hello")
