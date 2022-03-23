//Declaring the variables
let submitVote = document.getElementById('submit-vote');
let results = document.getElementById("result-div");

// Prevent Event Default onsubmit/onclick (vote)
$("#voting-form").submit(function(e) {
    e.preventDefault(); // <==stop page refresh==>
});

//Radio votE logic
function checkButton() {  
    if(document.getElementById('color-red').checked) { 
        document.getElementById("tick").innerHTML 
            =  "You have voted for " +
            document.getElementById("color-red").value;
    } 
    else if(document.getElementById('color-blue').checked) { 
        document.getElementById("tick").innerHTML 
            =  "You have voted for " +
            document.getElementById("color-blue").value;  
    } 
    else if(document.getElementById('color-pink').checked) { 
        document.getElementById("tick").innerHTML 
            = "You have voted for " +
            document.getElementById("color-pink").value;
    }        
    else if(document.getElementById('color-orange').checked) { 
        document.getElementById("tick").innerHTML 
            = "You have voted for " +
            document.getElementById("color-orange").value;
    }
    else if(document.getElementById('color-mediumslateblue').checked) { 
        document.getElementById("tick").innerHTML 
            = "You have voted for " +
            document.getElementById("color-mediumslateblue").value;   
    }
    else { 
        document.getElementById("error").innerHTML 
            = "You have not voted for anyone, please pick a person"; 
    } 
} 


//form Hide function

$(document).ready(function(){
    $(".vote btn btn-primary").click(function(){
      $(".voting-form").hide(1000, function(){
        alert("Hide() method is finished!");
      });
    });
    $(".resultsDiv").load(function(){
      $("voteMessage").show(10, function(){
        alert("Show() method is finished!");
      });
    });
  });

  $(document).ready(function(){
    $("button").click(function(){
      $("#div1").load("demo_test.txt");
    });
  });

  //form Hide function --#2

// $(document).ready(function(){
//     $(".vote btn btn-primary").click(function(){
//       $(".voting-form").hide(1000, function(){
//         alert("Hide() method is finished!");
//       });
//     });
//     $(".resultsDiv").load(function(){
//       $("voteMessage").show(1000, function(){
//         alert("Show() method is finished!");
//       });
//     });
//   });

//   $(document).ready(function(){
//     $("button").click(function(){
//       $("#div1").load("demo_test.txt");
//     });
//   });


         // Deprecated
    //      <script>
    //      document.getElementById("voting-form").onsubmit =
    //          function() {Voted()};
   
    //       function Voted() {
    //           document.getElementById("disp").innerHTML 
    //               = "You voted for " +
    //               document.getElementById("candidate").value; 
    //       }
    //    </script> 

               //continuation
    // <!--jquery-->
    //      <script>
    //         // using JQuery
    //          $(document).ready(function(){
    //                 $("#submit").click(function(e){
    //                        e.preventDefault();
    //                        $("#voting-form").submit();
    //                        $("#voting-form").hide();
    //                        alert("Your form was successfully submitted");
    //                     });
    //             });
    //         </script>

    //     -----------------------------

// function displayRadioValue() {
//     let ele = document.getElementsByName('candidate');
//     for(i = 0; i < ele.length; 1++){
//         if(ele[i].checked)
//         document.getElementById("result").innerHTML
//         = "candidate: "+ele[i].value;
//     }
// }
                


// //ARRAY for candidates
// const CANDIDATES = ["Bruno", "Sandra", "Phillip", "Teddy", "Steve"]       

          
//           //Declaring variables
// let submitAkan = document.getElementById('submit-vote');
// let results = document.getElementById("result-name");

// // Form Events
// submitAkan.onclick = (Event) => {
//     Event.preventDefault();
//     let genderValue = gender.options[gender.selectedIndex].value;
//     let birthdayValue = birthday.value;

//  //some conditions here   
//     if (!birthdayValue || !genderValue) {
//         alert("All fields are needed!")
//     }
//     else {
//         //get day of week from birthday
//         let officialBirthday = new Date(birthdayValue)
//         let day = DAYS[officialBirthday.getDay()];

//        if (genderValue === "male") {
//             let akanName = NAMES.male[day];
//             // console.log(akanName);
//             results.innerHTML = akanName;
//         }
//         else {
//             let akanName = NAMES.female[day];
//             // console.log(akanNme);
//             results.innerHTML = akanName;
//         }
//     }
// } 