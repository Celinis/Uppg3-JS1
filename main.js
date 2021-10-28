console.log("Test123");


let button = document.querySelector("#answersButton");
let finalAnswer = document.querySelector("#finalAnswer");
let buttonDarkmode = document.querySelector("#darkmode");

buttonDarkmode.addEventListener("click", ()=>{
  document.body.classList.toggle('dark');

  if(buttonDarkmode.innerHTML=="Dark-mode"){
    buttonDarkmode.innerHTML="Light-mode";
  }else {
    buttonDarkmode.innerHTML="Dark-mode";
  }
})

button.addEventListener("click", ()=> {

    let radioButtons1 = document.querySelectorAll("[name='question1']");
    let radioButtons2 = document.querySelectorAll("[name='question2']");
    let radioButtons3 = document.querySelectorAll("[name='question3']");
    let radioButtons4 = document.querySelectorAll("[name='question4']");
    let radioButtons5 = document.querySelectorAll("[name='question5']");
    let radioButtons6 = document.querySelectorAll("[name='question6']");
    let radioButtons7 = document.querySelectorAll("[name='question7']");
    let radioButtons8 = document.querySelectorAll("[name='question8']");
    let radioButtons9 = document.querySelectorAll("[name='question9']");
    let radioButtons10 = document.querySelectorAll("[name='question10']");

    let halloeller = document.querySelectorAll("[name='question101']");

    let chosenAnswer = [];
    
    radioButtons1.forEach(x => {
        if (x.checked === true && x.value === "true"){
            chosenAnswer.push(x.value);
        }
    })
    radioButtons2.forEach(x => {
      if (x.checked === true && x.value === "true"){
          chosenAnswer.push(x.value);
      }
    })
    radioButtons3.forEach(x => {
      if (x.checked === true && x.value === "true"){
          chosenAnswer.push(x.value);
      }
    })
    radioButtons4.forEach(x => {
      if (x.checked === true && x.value === "true"){
          chosenAnswer.push(x.value);
      }
    })
    radioButtons5.forEach(x => {
      if (x.checked === true && x.value === "true"){
          chosenAnswer.push(x.value);
      }
    })
    radioButtons6.forEach(x => {
      if (x.checked === true && x.value === "true"){
          chosenAnswer.push(x.value);
      }
    })
    radioButtons7.forEach(x => {
      if (x.checked === true && x.value === "true"){
          chosenAnswer.push(x.value);
      }
    })
    radioButtons8.forEach(x => {
      if (x.checked === true && x.value === "true"){
          chosenAnswer.push(x.value);
      }
    })
    radioButtons9.forEach(x => {
      if (x.checked === true && x.value === "true"){
          chosenAnswer.push(x.value);
      }
    })
    radioButtons10.forEach(x => {
      if (x.checked === true && x.value === "true"){
          chosenAnswer.push(x.value);
      }
    })

    let arr = [];
    halloeller.forEach(x => {
      if (x.checked === true){
        if (x.value === "true"){
          arr.push(x.value);
        } else if (x.value === "false"){
          arr.pop();
        }
      }
    })
    if (arr.length === 2){
      chosenAnswer.push("söta och har näbb");
    }
    

    console.log(chosenAnswer);

  if (chosenAnswer.length > 0){
    finalAnswer.innerHTML = "<p> Du fick " + chosenAnswer.length + " av 10 möjliga rätt </p>"
  }else {
    finalAnswer.innerHTML = "<p> Du fick 0 rätt. Ankademin är besviken på dig!</p>"
  }
})