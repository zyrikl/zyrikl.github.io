var button1 = document.getElementById("generate-linear-card");
var linear1 = document.getElementById("linear-card1");
var linear2 = document.getElementById("linear-card2");
var linear3 = document.getElementById("linear-card3");
var linearCard1Q1 = document.getElementById("linear-card1-q1");
var linearCard1Q2 = document.getElementById("linear-card1-q2");
var linearCard1Q3 = document.getElementById("linear-card1-q3");
var linearCard1Q4 = document.getElementById("linear-card1-q4");
var linearCard2Q1 = document.getElementById("linear-card2-q1");
var linearCard2Q2 = document.getElementById("linear-card2-q2");
var linearCard2Q3 = document.getElementById("linear-card2-q3");
var linearCard2Q4 = document.getElementById("linear-card2-q4");
var linearCard3Q1 = document.getElementById("linear-card3-q1");
var linearCard3Q2 = document.getElementById("linear-card3-q2");
var linearCard3Q3 = document.getElementById("linear-card3-q3");
var linearCard3Q4 = document.getElementById("linear-card3-q4");
var linearResult1 = document.getElementById("linear-result1");
var linearResult2 = document.getElementById("linear-result2");
var linearResult3 = document.getElementById("linear-result3");
var linearResult4 = document.getElementById("linear-result4");
var check1 = document.getElementById("check1");
var check2 = document.getElementById("check2");
var check3 = document.getElementById("check3");

var button2 = document.getElementById("generate-systems-card");
var systems1 = document.getElementById("systems-card1");
var systems2 = document.getElementById("systems-card2");
var systems3 = document.getElementById("systems-card3");
var systemsCard1Q1 = document.getElementById("systems-card1-q1");
var systemsCard1Q2 = document.getElementById("systems-card1-q2");
var systemsCard1Q3 = document.getElementById("systems-card1-q3");
var systemsCard1Q4 = document.getElementById("systems-card1-q4");
var systemsCard2Q1 = document.getElementById("systems-card2-q1");
var systemsCard2Q2 = document.getElementById("systems-card2-q2");
var systemsCard2Q3 = document.getElementById("systems-card2-q3");
var systemsCard2Q4 = document.getElementById("systems-card2-q4");
var systemsCard3Q1 = document.getElementById("systems-card3-q1");
var systemsCard3Q2 = document.getElementById("systems-card3-q2");
var systemsCard3Q3 = document.getElementById("systems-card3-q3");
var systemsCard3Q4 = document.getElementById("systems-card3-q4");
var systemsResult1 = document.getElementById("systems-result1");
var systemsResult2 = document.getElementById("systems-result2");
var systemsResult3 = document.getElementById("systems-result3");
var systemsResult4 = document.getElementById("systems-result4");
var check4 = document.getElementById("check4");
var check5 = document.getElementById("check5");
var check6 = document.getElementById("check6");

var button3 = document.getElementById("generate-graphs-card");
var graphs1 = document.getElementById("graphs-card1");
var graphs2 = document.getElementById("graphs-card2");
var graphs3 = document.getElementById("graphs-card3");
var graphsResult1 = document.getElementById("graphs-result1");
var graphsResult2 = document.getElementById("graphs-result2");
var graphsResult3 = document.getElementById("graphs-result3");
var graphsResult4 = document.getElementById("graphs-result4");
var graphsCard1Q1 = document.getElementById("graphs-card1-q1");
var graphsCard1Q2 = document.getElementById("graphs-card1-q2");
var graphsCard1Q3 = document.getElementById("graphs-card1-q3");
var graphsCard1Q4 = document.getElementById("graphs-card1-q4");
var check7 = document.getElementById("check7");

var button4 = document.getElementById("generate-ear-card");
var ear1 = document.getElementById("ear-card1");
var ear2 = document.getElementById("ear-card2");
var ear3 = document.getElementById("ear-card3");
var earResult1 = document.getElementById("ear-result1");
var earResult2 = document.getElementById("ear-result2");
var earResult3 = document.getElementById("ear-result3");
var earResult4 = document.getElementById("ear-result4");
var earCard1Q1 = document.getElementById("ear-card1-q1");
var earCard1Q2 = document.getElementById("ear-card1-q2");
var earCard1Q3 = document.getElementById("ear-card1-q3");
var earCard1Q4 = document.getElementById("ear-card1-q4");
var check8 = document.getElementById("check8");

var button5 = document.getElementById("generate-quad-card");
var quad1 = document.getElementById("quad-card1");
var quad2 = document.getElementById("quad-card2");
var quad3 = document.getElementById("quad-card3");
var quadResult1 = document.getElementById("quad-result1");
var quadResult2 = document.getElementById("quad-result2");
var quadResult3 = document.getElementById("quad-result3");
var quadResult4 = document.getElementById("quad-result4");
var quadCard1Q1 = document.getElementById("quad-card1-q1");
var quadCard1Q2 = document.getElementById("quad-card1-q2");
var quadCard1Q3 = document.getElementById("quad-card1-q3");
var quadCard1Q4 = document.getElementById("quad-card1-q4");
var check9 = document.getElementById("check9");

var tryNum = Math.floor(Math.random()*3)+1;
function display1() {
    // alert("Working");
    if (tryNum == 1) {
        // alert(tryNum);
        linear1.classList.toggle("appear");
        // linear1.style.display = "block";
    }
    if (tryNum == 2) {
        // alert(tryNum);
        linear2.classList.toggle("appear");
        // linear2.style.display = "block";
    }
    if (tryNum == 3) {
        // alert(tryNum);
        linear3.classList.toggle("appear");
        // linear3.style.display = "block";
    }
    tryNum = Math.floor(Math.random()*3)+1;
}
/* document.addEventListner('DOMContentLoaded', function(event) {
    button1.addEventListener('mousedown', display1());
}); */
button1.addEventListener("click", function (event) {
    if (event.value = "click") {
        // alert("hello");
    }
    // alert("Working");
    if (tryNum == 1) {
        // alert(tryNum);
        linear1.classList.toggle("appear");
        // linear1.style.display = "block";
    }
    if (tryNum == 2) {
        // alert(tryNum);
        linear2.classList.toggle("appear");
        // linear2.style.display = "block";
    }
    if (tryNum == 3) {
        // alert(tryNum);
        linear3.classList.toggle("appear");
        // linear3.style.display = "block";
    }
    // tryNum = Math.floor(Math.random()*3)+1;
});
check1.addEventListener("click", function (event) {
    if (event.value = "click") {
        // comment
    }
    if (linearCard1Q1.value == "4") {
        linearResult1.innerHTML = "Correct";
    } else {
        linearResult1.innerHTML = "Incorrect";
    }
    if (linearCard1Q2.value == "2") {
        linearResult2.innerHTML = "Correct";
    } else {
        linearResult2.innerHTML = "Incorrect";
    }
    if (linearCard1Q3.value == "-10") {
        linearResult3.innerHTML = "Correct";
    } else {
        linearResult3.innerHTML = "Incorrect";
    }
    if (linearCard1Q4.value == "2") {
        linearResult4.innerHTML = "Correct";
    } else {
        linearResult4.innerHTML = "Incorrect";
    }
    // tryNum = Math.floor(Math.random()*3)+1;
});
check2.addEventListener("click", function (event) {
    if (event.value = "click") {
        // comment
    }
    if (linearCard2Q1.value == "10") {
        linearResult1.innerHTML = "Correct";
    } else {
        linearResult1.innerHTML = "Incorrect";
    }
    if (linearCard2Q2.value == "40") {
        linearResult2.innerHTML = "Correct";
    } else {
        linearResult2.innerHTML = "Incorrect";
    }
    if (linearCard2Q3.value == "1") {
        linearResult3.innerHTML = "Correct";
    } else {
        linearResult3.innerHTML = "Incorrect";
    }
    if (linearCard2Q4.value == "1") {
        linearResult4.innerHTML = "Correct";
    } else {
        linearResult4.innerHTML = "Incorrect";
    }
    // tryNum = Math.floor(Math.random()*3)+1;
});
check3.addEventListener("click", function (event) {
    if (event.value = "click") {
        // comment
    }
    if (linearCard3Q1.value == "3") {
        linearResult1.innerHTML = "Correct";
    } else {
        linearResult1.innerHTML = "Incorrect";
    }
    if (linearCard3Q2.value == "9") {
        linearResult2.innerHTML = "Correct";
    } else {
        linearResult2.innerHTML = "Incorrect";
    }
    if (linearCard3Q3.value == "3") {
        linearResult3.innerHTML = "Correct";
    } else {
        linearResult3.innerHTML = "Incorrect";
    }
    if (linearCard3Q4.value == "1") {
        linearResult4.innerHTML = "Correct";
    } else {
        linearResult4.innerHTML = "Incorrect";
    }
    // tryNum = Math.floor(Math.random()*3)+1;
});
button2.addEventListener("click", function (event) {
    if (event.value = "click") {
        // alert("hello");
    }
    // alert("Working");
    /* if (tryNum == 1) {
        // alert(tryNum);
        systems1.classList.toggle("appear");
        // linear1.style.display = "block";
    }
    if (tryNum == 2) {
        // alert(tryNum);
        systems2.classList.toggle("appear");
        // linear2.style.display = "block";
    }
    if (tryNum == 3) {
        // alert(tryNum);
        systems3.classList.toggle("appear");
        // linear3.style.display = "block";
    } */
    systems1.classList.toggle("appear");
    // tryNum = Math.floor(Math.random()*3)+1;
});
check4.addEventListener("click", function (event) {
    if (event.value = "click") {
        // comment
    }
    if (systemsCard1Q1.value == "7") {
        systemsResult1.innerHTML = "Correct";
    } else {
        systemsResult1.innerHTML = "Incorrect";
    }
    if (systemsCard1Q2.value == "4") {
        systemsResult2.innerHTML = "Correct";
    } else {
        systemsResult2.innerHTML = "Incorrect";
    }
    if (systemsCard1Q3.value == "1") {
        systemsResult3.innerHTML = "Correct";
    } else {
        systemsResult3.innerHTML = "Incorrect";
    }
    if (systemsCard1Q4.value == "4") {
        systemsResult4.innerHTML = "Correct";
    } else {
        systemsResult4.innerHTML = "Incorrect";
    }
    // tryNum = Math.floor(Math.random()*3)+1;
});
/* check5.addEventListener("click", function (event) {
    if (event.value = "click") {
        // comment
    }
    if (systemsCard2Q1.value == "10") {
        linearResult1.innerHTML = "Correct";
    } else {
        linearResult1.innerHTML = "Incorrect";
    }
    if (linearCard2Q2.value == "40") {
        linearResult2.innerHTML = "Correct";
    } else {
        linearResult2.innerHTML = "Incorrect";
    }
    if (linearCard2Q3.value == "1") {
        linearResult3.innerHTML = "Correct";
    } else {
        linearResult3.innerHTML = "Incorrect";
    }
    if (linearCard2Q4.value == "1") {
        linearResult4.innerHTML = "Correct";
    } else {
        linearResult4.innerHTML = "Incorrect";
    }
    // tryNum = Math.floor(Math.random()*3)+1;
});
check6.addEventListener("click", function (event) {
    if (event.value = "click") {
        // comment
    }
    if (linearCard3Q1.value == "3") {
        linearResult1.innerHTML = "Correct";
    } else {
        linearResult1.innerHTML = "Incorrect";
    }
    if (linearCard3Q2.value == "9") {
        linearResult2.innerHTML = "Correct";
    } else {
        linearResult2.innerHTML = "Incorrect";
    }
    if (linearCard3Q3.value == "3") {
        linearResult3.innerHTML = "Correct";
    } else {
        linearResult3.innerHTML = "Incorrect";
    }
    if (linearCard3Q4.value == "1") {
        linearResult4.innerHTML = "Correct";
    } else {
        linearResult4.innerHTML = "Incorrect";
    }
    // tryNum = Math.floor(Math.random()*3)+1;
}); */
button3.addEventListener("click", function (event) {
    if (event.value = "click") {
        // alert("hello");
    }
    // alert("Working");
    /* if (tryNum == 1) {
        // alert(tryNum);
        systems1.classList.toggle("appear");
        // linear1.style.display = "block";
    }
    if (tryNum == 2) {
        // alert(tryNum);
        systems2.classList.toggle("appear");
        // linear2.style.display = "block";
    }
    if (tryNum == 3) {
        // alert(tryNum);
        systems3.classList.toggle("appear");
        // linear3.style.display = "block";
    } */
    graphs1.classList.toggle("appear");
    // tryNum = Math.floor(Math.random()*3)+1;
});
check7.addEventListener("click", function (event) {
    if (event.value = "click") {
        // comment
    }
    if (graphsCard1Q1.value == "2") {
        graphsResult1.innerHTML = "Correct";
    } else {
        graphsResult1.innerHTML = "Incorrect";
    }
    if (graphsCard1Q2.value == "(-4,0)") {
        graphsResult2.innerHTML = "Correct";
    } else {
        graphsResult2.innerHTML = "Incorrect";
    }
    if (graphsCard1Q3.value == "-3/2") {
        graphsResult3.innerHTML = "Correct";
    } else {
        graphsResult3.innerHTML = "Incorrect";
    }
    if (graphsCard1Q4.value == "(0,0)") {
        graphsResult4.innerHTML = "Correct";
    } else {
        graphsResult4.innerHTML = "Incorrect";
    }
    // tryNum = Math.floor(Math.random()*3)+1;
});
button4.addEventListener("click", function (event) {
    if (event.value = "click") {
        // alert("hello");
    }
    // alert("Working");
    /* if (tryNum == 1) {
        // alert(tryNum);
        systems1.classList.toggle("appear");
        // linear1.style.display = "block";
    }
    if (tryNum == 2) {
        // alert(tryNum);
        systems2.classList.toggle("appear");
        // linear2.style.display = "block";
    }
    if (tryNum == 3) {
        // alert(tryNum);
        systems3.classList.toggle("appear");
        // linear3.style.display = "block";
    } */
    ear1.classList.toggle("appear");
    // tryNum = Math.floor(Math.random()*3)+1;
});
check8.addEventListener("click", function (event) {
    if (event.value = "click") {
        // comment
    }
    if (earCard1Q1.value == "16") {
        earResult1.innerHTML = "Correct";
    } else {
        earResult1.innerHTML = "Incorrect";
    }
    if (earCard1Q2.value == "125") {
        earResult2.innerHTML = "Correct";
    } else {
        earResult2.innerHTML = "Incorrect";
    }
    if (earCard1Q3.value == "1024") {
        earResult3.innerHTML = "Correct";
    } else {
        earResult3.innerHTML = "Incorrect";
    }
    if (earCard1Q4.value == "1") {
        earResult4.innerHTML = "Correct";
    } else {
        earResult4.innerHTML = "Incorrect";
    }
    // tryNum = Math.floor(Math.random()*3)+1;
});
button5.addEventListener("click", function (event) {
    if (event.value = "click") {
        // alert("hello");
    }
    // alert("Working");
    /* if (tryNum == 1) {
        // alert(tryNum);
        systems1.classList.toggle("appear");
        // linear1.style.display = "block";
    }
    if (tryNum == 2) {
        // alert(tryNum);
        systems2.classList.toggle("appear");
        // linear2.style.display = "block";
    }
    if (tryNum == 3) {
        // alert(tryNum);
        systems3.classList.toggle("appear");
        // linear3.style.display = "block";
    } */
    quad1.classList.toggle("appear");
    // tryNum = Math.floor(Math.random()*3)+1;
});
check9.addEventListener("click", function (event) {
    if (event.value = "click") {
        // comment
    }
    if (quadCard1Q1.value == "4") {
        quadResult1.innerHTML = "Correct";
    } else {
        quadResult1.innerHTML = "Incorrect";
    }
    if (quadCard1Q2.value == "-2") {
        quadResult2.innerHTML = "Correct";
    } else {
        quadResult2.innerHTML = "Incorrect";
    }
    if (quadCard1Q3.value == "0") {
        quadResult3.innerHTML = "Correct";
    } else {
        quadResult3.innerHTML = "Incorrect";
    }
    if (quadCard1Q4.value == "3") {
        quadResult4.innerHTML = "Correct";
    } else {
        quadResult4.innerHTML = "Incorrect";
    }
    // tryNum = Math.floor(Math.random()*3)+1;
});