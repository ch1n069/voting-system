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