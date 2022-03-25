// let login = document.getElementById("login");
///////sign up  users to our database 
let signUp = document.getElementById("signup");
signUp.addEventListener("click", (e) => {
    //prevent default behavior
    e.preventDefault();


    var email = document.getElementById("email");
    var password = document.getElementById("password");


    auth.createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredentials) => {
            var user = userCredentials.email
            console.log(user);
        }).catch((error) => {
            var errorMessage = error.message
            alert(errorMessage)
        })

})


//logs in user
let login = document.getElementById("login");
login.addEventListener("click", (e) => {
    //prevent default behavior
    e.preventDefault();


    var email = document.getElementById("email");
    var password = document.getElementById("password");


    auth.signInWithEmailAndPassword(email.value, password.value)
        .then((userCredentials) => {
            var user = userCredentials.user
            alert(user.email)
            console.log(user.email);
        }).catch((error) => {
            var errorMessage = error.message
            alert(errorMessage)
        })

})


///handles user logout 

auth.onAuthStateChanged((user) => {
    if (user) {
        window.location = 'admin.html'
    }

})