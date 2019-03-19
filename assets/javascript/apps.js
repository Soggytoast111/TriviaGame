$("body").backstretch("assets/images/BQpp.gif")

//Holds all questions
var questionarray = [
"Question 1",
"Question 2",
"Question 3",
"Question 4",
"Question 5",
"Question 6",
"Question 7",
"Question 8",
"Question 9",
"Question 10",
"Question 11",
"Question 12"
]

//Holds possible answers for each question
var a1 = [
"Answer 1",
"Answer 2",
"Answer 3",
"Answer 4q"
]

var a2 = [
"Answer 1",
"Answer 2q",
"Answer 3",
"Answer 4"
]

var a3 = [
"Answer 1",
"Answer 2",
"Answer 3",
"Answer 4q"
]

var a4 = [
"Answer 1q",
"Answer 2",
"Answer 3",
"Answer 4"
]

var a5 = [
"Answer 1",
"Answer 2q",
"Answer 3",
"Answer 4"
]

var a6= [
"Answer 1",
"Answer 2",
"Answer 3q",
"Answer 4"
]

var a7 = [
"Answer 1",
"Answer 2",
"Answer 3q",
"Answer 4"
]

var a8 = [
"Answer 1",
"Answer 2q",
"Answer 3",
"Answer 4"
]

var a9 = [
"Answer 1",
"Answer 2",
"Answer 3q",
"Answer 4"
]

var a10 = [
"Answer 1",
"Answer 2",
"Answer 3",
"Answer 4q"
]

var a11 = [
"Answer 1",
"Answer 2",
"Answer 3",
"Answer 4q"
]

var a12 = [
"Answer 1q",
"Answer 2",
"Answer 3",
"Answer 4"
]

//Array that tracks questions that have not been selected
var questionsleft = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
//Array that holds correct answers to questions
var answerarray = [4, 2, 4, 1, 2, 3, 3, 2, 3, 4, 4, 1]
//Array to reference answer blocks
var aarray = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12]

//Stores status of game
var currentquestion = 0
var selectedanswer = 0
var shufflearray = []

//Debug button to move game forward
$("#startgame").click(function() {
nextquestion()
})

//click events for answer selection
$("#answer1").click(function () {
    selectedanswer = shufflearray[0] +1
    checkanswer()
    nextquestion()
})

$("#answer2").click(function () {
    selectedanswer = shufflearray[1]+1
    checkanswer()
    nextquestion() 
})

$("#answer3").click(function () {
    selectedanswer = shufflearray[2]+1
    checkanswer()
    nextquestion()    
})

$("#answer4").click(function () {
    selectedanswer = shufflearray[3]+1
    checkanswer()
    nextquestion()
})

//Advances game
function nextquestion() {
    var rand = randomq()
    currentquestion = questionsleft[rand]
    var answer = aarray[currentquestion]
    shufflearray = shuffleans()

    $("#question").text(questionarray[currentquestion])
    $("#answer1").text(answer[shufflearray[0]])
    $("#answer2").text(answer[shufflearray[1]])
    $("#answer3").text(answer[shufflearray[2]])
    $("#answer4").text(answer[shufflearray[3]])
    questionsleft.splice(rand, 1)
}
//RNG for question array
function randomq() {
    return Math.floor(Math.random() * questionsleft.length)
}

//Generates random order to display answers
function shuffleans() {
    var shuffledarrays = [
        [0, 1, 2, 3],
        [0, 1, 3, 2],
        [0, 2, 3, 1],
        [0, 2, 1, 3],
        [0, 3, 1, 2],
        [0, 3, 2, 1],
        [1, 0, 3, 2],
        [1, 0, 2, 3],
        [1, 2, 0, 3],
        [1, 2, 3, 0],
        [1, 3, 0, 2],
        [1, 3, 2, 0],
        [2, 0, 1, 3],
        [2, 0, 3, 1],
        [2, 1, 0, 3],
        [2, 1, 3, 0],
        [2, 3, 0, 1],
        [2, 3, 1, 0],
        [3, 0, 1, 2],
        [3, 0, 2, 1],
        [3, 1, 0, 2],
        [3, 1, 2, 0],
        [3, 2, 0, 1],
        [3, 2, 1, 0]
    ]

    var randomarray = Math.floor(Math.random()*shuffledarrays.length)
    return shuffledarrays[randomarray]
}

//Checks if selected answer is correct
function checkanswer() {
    if (selectedanswer == answerarray[currentquestion]) {
        alert("Correct Answer!")
        return true
    }
    else {
        alert("Wrong Answer!")
        return false
    } 
}

//Intro Sequence Scripts
function introsequence1()  {
    $("p1").fadeIn(2000, function() {
        $("p2").fadeIn(2000, function() {
            $("p3").fadeIn(2000, function(){
                setTimeout(function() {
                $("p1").fadeOut(1000)
                $("p2").fadeOut(1000)
                $("p3").fadeOut(1000)
                }, 3000)
            })
        })
    })
}

function introsequence2()  {
    $("#titleimg").fadeIn(2000, function() {
        $("p4").fadeIn(2000, function() {
            setTimeout(function() {
            $("#titleimg").fadeOut(1000)
            $("p4").fadeOut(1000)
            }, 6000)
        })
    })
}

function introsequence3()  {
    $("p5").fadeIn(2000, function() {
        $("p6").fadeIn(2000, function() {
            $("p7").fadeIn(2000, function(){
                $("p8").fadeIn(2000, function(){
                    setTimeout(function() {
                    $("p5").fadeOut(1000)
                    $("p6").fadeOut(1000)
                    $("p7").fadeOut(1000)
                    $("p8").fadeOut(1000)
                    }, 4000)
                })
            })
        })
    })
}

var introactive = 0

$("#titleCard").click(function(){
    if (introactive !=1) {
        introactive = 1
        nextquestion()
        introsequence1()
        setTimeout(function() {
            introsequence2()
        }, 12000)
        setTimeout(function() {
            introsequence3()
        }, 25000)
        setTimeout(function(){
            $("#titleCard").fadeOut(2000)
        }, 40000)
    }
})

//Intro skipped if key is pressed
$('body').keydown(function () {
    $("#titleCard").fadeOut(2000)
})
