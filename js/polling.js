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

 