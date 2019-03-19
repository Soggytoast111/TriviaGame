$("body").backstretch("assets/images/BQpp.gif")

//Holds all questions
var questionarray = [
"Where was the first known lighthouse located?",
"What is the oldest existing lighthouse in the world?",
"Where was the first lighthouse in the USA built?",
"Where was the first lighthouse, owned, and operated by the federal government, built in the USA?",
"Where is the tallest lighthouse in the USA located?",
"Which state in the USA currently has the most lighthouses?",
"True or False:  Lighthouse keeping was limited to men-only until the 1960s because it was considered too dangerous.",
"What was the first lighthouse in the USA to be lit by an electricity?",
"Where is the most powerful lighthouse in the USA?",
"Lighthouses are constructed from all of the following materials except:",
"How many keepers does a lighthouse typically have?",
"What is the maximum range of a lighthouse light at sea level?",
"True or False:  Every lighthouse currently in operation in the United States is automated.",
"Where is the oldest currently active lighthouse in the United States?",
"Where is the newest lighthouse in the USA?",
"Which American lighthouse was the most expensive to build?",
"Which lighthouse was the tallest and largest ever built?"
]

//Holds possible answers for each question
var a1 = [
"Egypt",
"Greece",
"Spain",
"Rome"
]

var a2 = [
"La Coruna, in Spain",
"Boston Light, in Massachusetts",
"Eddystone Lighthouse, in England",
"Cordouan Lighthouse, in France"
]

var a3 = [
"Boston, Massachusetts",
"New York, New York",
"Philadelphia, Pennsylvania",
"Baltimore, Maryland"
]

var a4 = [
"Sandy Hook, New Jersey",
"Baltimore, Maryland",
"Erie, Pennsylvania",
"Cape Henry, Virginia"
]

var a5 = [
"Cape Hatteras, North Carolina",
"Alcatraz Island, California",
"Baltimore, Maryland",
"Philadelphia, Pennsylvania"
]

var a6= [
"Michigan",
"Massachusetts",
"Maryland",
"North Carolina"
]

var a7 = [
"True",
"False",
"{}",
"{}"
]

var a8 = [
"Ellis Island, New York",
"Baltimore, Maryland",
"Sandy Hook, New Jersey",
"Philadelphia, Pennsylvania"
]

var a9 = [
"Charleston, South Carolina",
"Sandy Hook, New Jersey",
"Cape Henry, Virginia",
"Erie, Pennsylvania"
]

var a10 = [
"Aluminum",
"Brick",
"Concrete",
"Fiberglass"
]

var a11 = [
"1-5",
"6-10",
"11-15",
"15-30"
]

var a12 = [
"18.4 miles",
"12.9 miles",
"8.7 miles",
"28.2 miles"
]

var a13 = [
"True",
"False",
"{}",
"{}"
]

var a14 = [
"Sandy Hook, New Jersey",
"Cape Henry, Virginia",
"New York, New York",
"Baltimore, Maryland"
]

var a15 = [
"Baltimore, Maryland",
"Alcatraz Island, California",
"Erie, Pennsylvania",
"Sullivans Island, South Carolina"
]

var a16 = [
"Cape Hatteras",
"Minot's Ledge",
"Boston Harbor",
"St. Geroge's Reef"
]

var a17 = [
"Cape Hatteras Lighthouse",
"Pharos of Alexandria",
"St. Georges Reef Lighthouse",
"Portland Head Lighthouse"
]


//Array that tracks questions that have not been selected
var questionsleft = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
//Array that holds correct answers to questions
var answerarray = [1, 1, 1, 4, 1, 1, 2, 1, 1, 4, 1, 1, 2, 1, 4, 4, 2]
//Array to reference answer blocks
var aarray = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17]

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
