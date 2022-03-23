$(document).ready(() => {


    $(".addUser").click(() => {
        $(".addingUser").slideToggle();
    })

    // $(".sendMail").click(()=>{

    // })

    // button for adding user details
    $("form.addingUser").submit((event) => {
        event.preventDefault();
        let userName = $(".user_name").val();
        let userEmail = $(".user_email").val();
        var tableEl = $("<tr><td> " + userName + " </td> <td> " + userEmail + "</td></tr>")
        $("#tBody").append(tableEl);
        $(".removeUser").show();
        // $("#tBody").eq(0).remove();

        //look for removing
        //$("#tBody").append(userEmail);

    })
    $(".removeUser").click(function () {
        history.go(0);
    })

})