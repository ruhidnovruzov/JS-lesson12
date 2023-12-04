//Task-1
// function showName(){
//     var h1 = document.querySelector("h1")
//     h1.classList.toggle("accordion")


//     if(h1.innerHTML == "Ruhid"){
//         h1.innerHTML=" "
//     }
//     else{
//         h1.innerHTML="Ruhid"
//     }
// }

// function findAbove(number, newNumber){
//     var above;
//     above = Math.log(newNumber) / Math.log(number);
//     console.log(above)
// }

// findAbove(2, 1024)

//Task-2

// function reverseCase(inputString) {
//     var reversedString = '';

//     for (var i = 0; i < inputString.length; i++) {
//         var currentChar = inputString[i];

//         if (currentChar === currentChar.toUpperCase()) {
//             reversedString += currentChar.toLowerCase();
//         } else {
//             reversedString += currentChar.toUpperCase();
//         }
//     }

//     return reversedString;
// }

// var originalString = "Hello World";
// var reversedString = reverseCase(originalString);

// console.log(reversedString);

// // Task-3

// function getGeneratePswd(){
//     var number=Math.round(Math.random()*Math.pow(10,12))
//     document.querySelector("input").value=number.toString(36)


//     var red = Math.floor(Math.random()*255)
//     var green = Math.floor(Math.random()*255)
//     var blue = Math.floor(Math.random()*255)

//     document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

// }
// getGeneratePswd()
