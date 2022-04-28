
let verb = "";
let noun1 = "";
let noun2 = "";
let adjective = "";
let adverb = "";
let description = "";


let colorArray = [
    ["#F5F5F5", "#3FC1C9", "#FC5185", "#364F6B"],
    ["#F6F7D7", "#3EC1D3", "#FF9A00", "#FF165D"],
    ["#FFC300", "#FF5733", "#C70039", "#581845"],
    ["#E4F9F5", "#30E3CA", "#30E3CA", "#40514E"],
    ["#A8A7A7", "#CC527A", "#E8175D", "#363636"],
    ["#A8E6CE", "#DCEDC2", "#FFAAA6", "#FF8C94"],
    ["#594F4F", "#547980", "#45ADA8", "#E5FCC2"],
    ["#F8BC24", "#F58800", "#266867", "#051821"],
    ["#FEFAE0", "#DDA15E", "#BC6C25", "#283618"],
    ["#D2383F", "#98AA11", "#81971C", "#546811"]
]


let fontArray = [
    "Square Peg", 
    "Orelega One", 
    "Bebas Neue", 
    "Josefin Sans", 
    "Source Code Pro", 
    "Whisper", 
    "Lobster", 
    "Updock", 
    "Comfortaa", 
    "Amatic SC"
]


let verbArray = [

    "walk",
    "bibble",
    "impignorate",
    "wee",
    "go number two",
    "juggle",
    "indemnify",
    "bamboozle",
    "punch",
    "drink",
    "eat"    

]

let nounArray = [

    "snickersnee",
    "nincompoops",
    "dogs",
    "cats",
    "carpet fluff",
    "toenails",
    "people",
    "surgeons",
    "ripe bananas",
    "best friends"

]


function getRandomNumberTen(){

    let randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;

}

function getRandomNumberFifty(){

    let randomNumber = Math.floor(Math.random() * 50);
    return randomNumber;

}


function getMessage(){

    let newButton = document.getElementById("messageButton");

    let newCard = document.getElementById("container");

    let newMessageBackground = document.getElementById("messageContainer");

    let newMessage = document.getElementById("message");

    noun1 = nounArray[getRandomNumberTen()];

    noun2 = nounArray[getRandomNumberTen()];

    verb = verbArray[getRandomNumberTen()];

    let messageTemplates = [

        `If you ${verb} ${adverb} at ${noun1}s for long enough, it's clear that ${adjective} ${noun2}s ${description}.`,
        `${noun1}'s are like ${noun2}. They both ${verb} ${adverb}`,
        `Why do ${noun1}s ${verb} ${adverb} constantly? I for one blame ${noun2}.`,
        `People who ${adverb} ${verb} ${description}.`,
        `I love to ${verb} ${noun2}s.`,
        `${verb}ing cake takes a lot of belief in ${noun1}s.`,
        `The ${adjective} movies always end with the ${noun1}s winning. ${adverb}ly boring.`,
        `${adjective} ${noun1}s ${verb} ${adverb}. Always.`,
        `Never make ${noun1} and ${noun2} ${verb}.`,
        `To ${verb} or not to ${verb}, that is ${noun2}'s question... - William Shakes${noun2}`,
    ] 

    messageToReturn = messageTemplates[getRandomNumberTen()];

    newMessage.innerHTML = messageToReturn;

}

let currentButton = document.getElementById("messageButton");
messageButton.addEventListener("click", getMessage);