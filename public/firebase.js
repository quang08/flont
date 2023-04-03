// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRYKtLPV7LU4kx3eZhBquGxjvdCe8Gbh4",
  authDomain: "flont-8f98b.firebaseapp.com",
  databaseURL: "https://flont-8f98b-default-rtdb.firebaseio.com",
  projectId: "flont-8f98b",
  storageBucket: "flont-8f98b.appspot.com",
  messagingSenderId: "310275842731",
  appId: "1:310275842731:web:dea0bf7da07bd1c6810dee",
  measurementId: "G-JQVZ5MKF52",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//create db and reference to db
const formDB = firebase.database().ref("contact");

//listen for submit in form
document.getElementById("form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  let emailInput = getElementValue("emailInput");
  saveInfo(emailInput); //save to firebase

  //   enable alertSuccess
  document.querySelector(".alert").style.display = "block";
  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
  //   reset the form
  document.getElementById("form").reset();
}

//save info to firebase
const saveInfo = (email) => {
  let newForm = formDB.push();
  newForm.set({
    email: email,
  });
};

const getElementValue = (id) => {
  return document.getElementById(id).value;
};

