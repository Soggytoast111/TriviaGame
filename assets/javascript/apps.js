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
"What was the first lighthouse in the USA to be lit by electricity?",
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
" ",
" "
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
" ",
" "
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
var questionsleft = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
//Array that holds correct answers to questions
var answerarray = [1, 1, 1, 4, 1, 1, 2, 1, 1, 4, 1, 1, 2, 1, 4, 4, 2]
//Array to reference answer blocks
var aarray = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17]

var blurarray = [$("#answer1"), $("#answer2"), $("#answer3"), $("#answer4")] 

var active = 0

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
    if (active == 1) {
    selectedanswer = shufflearray[0] +1
    blurarray[0].attr("class", "incorrectanswer")
    blurarray[1].attr("class", "incorrectanswer")
    blurarray[2].attr("class", "incorrectanswer")
    blurarray[3].attr("class", "incorrectanswer")

    blurarray[shufflearray.indexOf(answerarray[currentquestion]-1)].removeAttr("class")
    stoptime()
    checkanswer()
    active =2}
    //nextquestion()
})

$("#answer2").click(function () {
    if (active == 1) {
    selectedanswer = shufflearray[1]+1
    blurarray[0].attr("class", "incorrectanswer")
    blurarray[1].attr("class", "incorrectanswer")
    blurarray[2].attr("class", "incorrectanswer")
    blurarray[3].attr("class", "incorrectanswer")

    blurarray[shufflearray.indexOf(answerarray[currentquestion]-1)].removeAttr("class")
    stoptime()
    checkanswer()
    active = 2}
    //nextquestion() 
})

$("#answer3").click(function () {
    if (active == 1) {
    selectedanswer = shufflearray[2]+1
    blurarray[0].attr("class", "incorrectanswer")
    blurarray[1].attr("class", "incorrectanswer")
    blurarray[2].attr("class", "incorrectanswer")
    blurarray[3].attr("class", "incorrectanswer")

    blurarray[shufflearray.indexOf(answerarray[currentquestion]-1)].removeAttr("class")
    stoptime()
    checkanswer()
    active = 2}
    //nextquestion()    
})

$("#answer4").click(function () {
    if (active == 1) {
    selectedanswer = shufflearray[3]+1
    blurarray[0].attr("class", "incorrectanswer")
    blurarray[1].attr("class", "incorrectanswer")
    blurarray[2].attr("class", "incorrectanswer")
    blurarray[3].attr("class", "incorrectanswer")

    blurarray[shufflearray.indexOf(answerarray[currentquestion]-1)].removeAttr("class")
    stoptime()
    checkanswer()
    active = 2}
    //nextquestion()
})

//Advances game
function nextquestion() {
    blurarray[0].removeAttr("class")
    blurarray[1].removeAttr("class")
    blurarray[2].removeAttr("class")
    blurarray[3].removeAttr("class")
    intervalTimer()
    active = 1
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
        $("#correctnotify").text("Correct!")
        $("#correctnotify").fadeIn(500)
        setTimeout(function() {facts()}, 3000)
        $("#sounds").attr("src", "assets/sounds/bells.mp3")
        document.getElementById("sounds").play()
        scorecorrect++
        $("#correctcount").text("Correct:  " + scorecorrect)
        if (scorecorrect == 8){
            $("#triviadiv").fadeOut(1000)
            setTimeout(function(){$("#correctnotify").fadeOut(1000)}, 6000)
            $("#finalpage").fadeIn(1000)
            $("#answerdiv").fadeOut(1000)
            $("#finaltext2").text("Congratulations!")
            $("#finalpic").attr("src", "assets/images/success.png")
            $("#finaltext3").html("You Win!")
            $("#finaltext").html("Correct:  " + scorecorrect + "<br>"
                                +"Incorrect:  " + scoreincorrect)
        }
        return true
    }
    else {
        $("#correctnotify").text("Incorrect!")
        $("#correctnotify").fadeIn(500)
        setTimeout(function() {facts()}, 3000)
        $("#sounds").attr("src", "assets/sounds/foghorn.mp3")
        document.getElementById("sounds").play()
        scoreincorrect++
        $("#incorrectcount").text("Incorrect:  " + scoreincorrect)
        if (scoreincorrect == 3){
            $("#triviadiv").fadeOut(1000)
            $("#answerdiv").hide()
            setTimeout(function(){$("#correctnotify").hide()}, 2000)
            setTimeout(function(){$("#correctnotify").hide()}, 3000)
            setTimeout(function() {$("#answerdiv").hide()}, 3000)
            $("#finalpage").fadeIn(1000)
            $("#finaltext2").text("Oh no!")
            $("#finalpic").attr("src", "assets/images/failure.jpg")
            $("#finaltext3").html("Out of Guesses <br> Try again!")
            $("#finaltext").html("Correct:  " + scorecorrect + "<br>"
                                +"Incorrect:  " + scoreincorrect)

        }
        return false
    } 
}

//Facts screen
var answerimg = [
    "assets/images/answerfacts/Crop/1.png",
    "assets/images/answerfacts/Crop/2.png",
    "assets/images/answerfacts/Crop/3.png",
    "assets/images/answerfacts/Crop/4.jpg",
    "assets/images/answerfacts/Crop/5.png",
    "assets/images/answerfacts/Crop/6.png",
    "assets/images/answerfacts/Crop/7.jpg",
    "assets/images/answerfacts/Crop/8.png",
    "assets/images/answerfacts/Crop/9.png",
    "assets/images/answerfacts/Crop/10.png",
    "assets/images/answerfacts/Crop/11.png",
    "assets/images/answerfacts/Crop/12.jpg",
    "assets/images/answerfacts/Crop/13.png",
    "assets/images/answerfacts/Crop/14.png",
    "assets/images/answerfacts/Crop/15.png",
    "assets/images/answerfacts/Crop/16.jpg",
    "assets/images/answerfacts/Crop/17.png"
]


function facts() {
    
    $("#triviadiv").fadeOut(1000)
    $("#answerimagediv").fadeIn(1000)
    $("#correctnotify").fadeIn(1000)
    $("#answerdiv").fadeIn(1000)
    $("#answerimage").attr("src", answerimg[currentquestion])
    $("#facts").text(answertext[currentquestion]) 
    
    
    $("#facts").fadeIn(1000)
    }

    $("#answerdiv").click(function() {
        
        $("#answerimagediv").fadeOut(1000)
        $("#correctnotify").fadeOut(1000)
        $("#facts").fadeOut(1000, function() {
            if (active = 2) {
            nextquestion()
            $("#triviadiv").fadeIn(500)
            $("#answerdiv").fadeOut(1000)
        }})
})


//Intro Sequence Scripts
function introsequence1()  {
    $("p1").fadeIn(2000, function() {
        $("p2").fadeIn(2000, function() {
            $("p3").fadeIn(2000, function(){
                setTimeout(function() {
                $("p1").fadeOut(1000)
                $("p2").fadeOut(1000)
                $("p3").fadeOut(1000)
                $("#sounds").attr("src", "assets/sounds/foghorn.mp3")
                setTimeout(function() {document.getElementById("sounds").play()}, 2000)
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
var musicon = 0
$("#titleCard").click(function(){
    if (introactive !=1) {
        $("#clickme").hide()
        if (musicon == 0) {
            musicon = 1
            document.getElementById("backgroundwave").play()
        }
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


//Timer functions
var timercount = 90
var timerset = 0
var setinterval = 0

function intervalTimer() {
    if (timerset == 0){
    timerset = 1
    setinterval = setInterval(function() {timer()}, 1000)
    }
}

function timer() {
    $("#timerdiv").text("Time remaining:  " + timercount + " seconds" )
    timercount = timercount -1
    if (timercount <= 0){
        $("#triviadiv").fadeOut(1000)
        $("#correctnotify").fadeOut(1000)
        $("#finalpage").fadeIn(1000)
        $("#finaltext2").text("Oh no!")
        $("#finalpic").attr("src", "assets/images/failure.jpg")
        $("#finaltext3").html("Time Over <br> Try again!")
        $("#finaltext").html("Correct:  " + scorecorrect + "<br>"
                            +"Incorrect:  " + scoreincorrect)
    }
}

function stoptime() {
    timerset = 0
    clearInterval(setinterval)
}

//Answer facts in Array
var answertext = [
    "The Great Lighthouse at Alexandria was built around 280 BC. It was destroyed by invaders and earthquakes in the 1300s.",
    "The La Coruna Lighthouse was was built in 20 BC!",
    "Boston Light, the first lighthouse in America, was built in Boston on Little Brewster Island in 1716.  The original tower was destroyed by the British and eventually reconstructed in 1784.",
    "The Cape Henry Lighthouse is the first federally funded public works project of the newly formed United States government. It was authorized by George Washington and overseen by Alexander Hamilton.",
    "The lighthouse at Cape Hatteras was moved and rebuilt in 1870.  The original tower only stood at 90 feet high, however, after the expansion it became 196 feet tall!",
    "Michigan currently has the most with 124 lighthouses.",
    "Lighthouse keeping was one of the first U.S. government jobs available to women in the 19th century.  The majority of women lighthouse keepers saved lives, not only indirectly by keeping their lamps and fog horns operating, but also directly by rescuing people from the treacherous waters of the Great Lakes. They took their job very seriously and rose to the challenges of lighthouse keeping with strength and determination.",
    "The first American lighthouse to use electricity was the Statue of Liberty in 1886.",
    "The most powerful lighthouse in the Western Hemisphere is the Sullivan Island Light in Charleston, SC.  It originally had 28 million candelas (candlepower) but the light was actually too dazzling and  the power was lowered to 1.2 million candelas.  It could still be seen over 26 nautical miles (48 km; 30 mi)",
    "Lighthouse depots were built around the country to service lighthouses. All supplies were shipped to the lighthouse depots from where the supplies were shipped to the various lighthouses. The largest lighthouse depot was on Staten Island, New York.",
    "Only one to five keepers will man a light station.  It is a very important job that is much revered by seafaring captains and crew.",
    "While the intensity of the light can vary greatly depending on the weather and atmospheric conditions, the maximum range at sea level is limited by the curvature of the Earth.",
    "All *but one* lighthouses in the United States are automated.  Because Boston Light is the oldest station in the United States, Congress has declared that this lighthouse always be a staffed station. ",
    "It was first lit in 1764 - it remains active to this day.",
    "The newest U.S. lighthouse is the Charleston Light on Sullivans Island, South Carolina, completed in 1962.",
    "The St. George's Reef Lighthouse, in California, took 10 years to construct, at a cost of $715,000.",
    "The Pharos of Alexandria, built in about 280 B.C. is considered one of the Seven Wonders of the Ancient World.  It was estimated to be over 330 feet tall.  Unfortunately it was badly damaged by earthquakes between AD 956 and 1323, and became an abandoned ruin.", 
]

var scorecorrect = 0
var scoreincorrect = 0

$("#finalpage").click(function() {
    setTimeout(function() {reset()}, 1000)
})

function reset() {
timerset=1
scorecorrect=0
scoreincorrect=0
timercount = 55
setinterval = 0
questionsleft = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
answerarray = [1, 1, 1, 4, 1, 1, 2, 1, 1, 4, 1, 1, 2, 1, 4, 4, 2]
aarray = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17]
active = 0
currentquestion = 0
selectedanswer = 0
shufflearray = []
$("#finalpage").fadeOut(1000)
$("#triviadiv").fadeIn(1000)
$("#correctcount").text("Correct:  0")
$("#incorrectcount").text("Incorrect:  0")
nextquestion()
}