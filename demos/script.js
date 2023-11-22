// let titleElement = document.getElementById("title");
// titleElement.innerText = "wow awesome!!"
 // you can use https://jsonplaceholder.typicode.com/ to test the api
// const nameInput = document.getElementById("nameInput")
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startChange(){
    weridButton.style.color = "red"
   // executes command after x ms
   for(i = 0; i < 20; i++) {
    console.log("????")
    setTimeout(changeTitle("The Value of Persistence in Computer Science."), 500)
    await sleep(250)
    setTimeout(changeTitle("The Value of Persistence in Computer Science.."), 500)
    await sleep(250)
    setTimeout(changeTitle("The Value of Persistence in Computer Science..."), 500)
    await sleep(250)
    setTimeout(changeTitle("The Value of Persistence in Computer Science"), 500)
    await sleep(250)
    weridButton.style.color = "red"
    await sleep(250)   
    weridButton.style.color = "blue"
   }
 }

function changeTitle(title){
   let titleElement = document.getElementById("title")
   titleElement.innerText = title    
}
let titleElement = document.getElementById("title")
let weridButton = document.getElementById("uh");
weridButton.addEventListener("click", startChange)








// alert("script.js loaded!!");

// let varName = 78;

// if (varName > 30)
//     alert("greater");
// else 
//     alert("less");
// let coolist = [
//     "i",
//     "love",
//     "people",
//     "not really"
// ];
// // append to a list (you can use different types)
// coolist.push("not", "not", "not","not", 67)
// // log the list to the console
// console.log(coolist);

// // create a function
// function greetPerson(name) {
//     return "Hello " + name
// }

// alert(greetPerson("Frank"));
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))