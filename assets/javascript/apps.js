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

var answerarray = [4, 2, 4, 1, 2, 3, 3, 2, 3, 4, 4, 1]
var aarray = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12]



$("#startgame").click(function() {
    var question = randomq()
    var answer = aarray[question]
    var shufflearray = shuffleans()

    $("#question").text(questionarray[question])
    $("#answer1").text(answer[shufflearray[0]])
    $("#answer2").text(answer[shufflearray[1]])
    $("#answer3").text(answer[shufflearray[2]])
    $("#answer4").text(answer[shufflearray[3]])
})

function randomq() {
    return Math.floor(Math.random() * answerarray.length)
}

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