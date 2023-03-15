// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDownloadURL, getStorage } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-WBDNcTnDt2HsinxMEZT7Q6yRI7l-PwQ",
  authDomain: "stagetwoprojectwehelp.firebaseapp.com",
  projectId: "stagetwoprojectwehelp",
  storageBucket: "stagetwoprojectwehelp.appspot.com",
  messagingSenderId: "535111221739",
  appId: "1:535111221739:web:8ec340d0ac41b1282d99ae",
  measurementId: "G-CGVSHHJX63"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = firebase.storage();
console.log(storage)


function uploadImg() {
    const ref = firebase.storage().ref()
    const file = document.querySelector("#file").files[0];
    const name = new Date() + '-' + file.name;
    const metadata = {
        contentType:file.type
    }
    const task = ref.child(name).put(file,metadata)
    task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
        console.log(url)
    })
}