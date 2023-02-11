const registerForm = document.querySelector('#register-form');
const loginForm = document.querySelector('#login-form');

document.querySelector('#switch-to-login').addEventListener('click', () => {
  registerForm.style.display = 'none';
  loginForm.style.display = 'block';
});

document.querySelector('#switch-to-register').addEventListener('click', () => {
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
});

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDfMaYVV38UGET6YDCQ2l6RdPd8oPWhTj0",
    authDomain: "datasystem-a7842.firebaseapp.com",
    databaseURL: "https://your_project_id.firebaseio.com",
    projectId: "datasystem-a7842",
    storageBucket: "datasystem-a7842.appspot.com",
    messagingSenderId: "1065096338888",
    appId: "1:1065096338888:web:dc95768551f5dae8cab4fd"
  };
  
  firebase.initializeApp(firebaseConfig);
  