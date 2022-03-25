$(document).ready(() => {


    $(".addUser").click(() => {
        $(".addingUser").slideToggle();
    })


    $("form.addingUser").submit((event) => {
        event.preventDefault();
        let userName = $(".user_name").val();
        let userEmail = $(".user_email").val();
        var tableEl = $("<tr><td> " + userName + " </td> <td> " + userEmail + "</td></tr>")
        $("#tBody").append(tableEl);
        $(".removeUser").show();
        $("#displayUsers").show();


    })
    $(".removeUser").click(function() {
        history.go(0);
    })

})



const logOut = document.querySelector('#sign-out')
logOut.addEventListener('click', (e) => {
    e.preventDefault();


    auth.signOut();
    window.location.href = "login.html"





    console.log("signed out")






})