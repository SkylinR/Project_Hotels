import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDipKUIpgRRAyKe_ddzDtn1caySyR1gePs",
    authDomain: "project-hotel-fa610.firebaseapp.com",
    databaseURL: "https://project-hotel-fa610.firebaseio.com",
    projectId: "project-hotel-fa610",
    storageBucket: "",
    messagingSenderId: "48536307810"
}

export const firebaseApp = firebase.initializeApp(config);
export const hotelRef = firebase.database().ref('Hotels');
