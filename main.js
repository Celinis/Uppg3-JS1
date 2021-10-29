
//hämta från DOMen
let button = document.querySelector("#answersButton"); //Check answers button
let container = document.querySelector("#finalAnswer"); //container att lägga resultattexten i
let buttonDarkmode = document.querySelector("#darkmode");//darkmode button

//Darkmode buttons event listerner
buttonDarkmode.addEventListener("click", ()=>{
  document.body.classList.toggle('dark');

  if(buttonDarkmode.innerHTML=="Dark-mode"){
    buttonDarkmode.innerHTML="Light-mode";
  }else {
    buttonDarkmode.innerHTML="Dark-mode";
  }
})

//Check answers buttons event listerner 
button.addEventListener("click", ()=> {

  //hämtar alla inputs från DOMen
  let radioButtons1 = document.querySelectorAll("[name='question1']");
  let radioButtons2 = document.querySelectorAll("[name='question2']");
  let radioButtons3 = document.querySelectorAll("[name='question3']");
  let radioButtons4 = document.querySelectorAll("[name='question4']");
  let radioButtons5 = document.querySelectorAll("[name='question5']");
  let radioButtons6 = document.querySelectorAll("[name='question6']");
  let radioButtons7 = document.querySelectorAll("[name='question7']");
  let radioButtons8 = document.querySelectorAll("[name='question8']");
  let radioButtons9 = document.querySelectorAll("[name='question9']");
  let checkboxButton10 = document.querySelectorAll("[name='question10']");

  let chosenAnswer = []; //skapar en array att lägga användarens svar i 
  
  //lägger användarens val i arrayen. 
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

  let arr = [];
  checkboxButton10.forEach(x => {
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

  //Skriver ut resultatet till användaren, med hjälp av arrayen.
  if(chosenAnswer.length > 7){
    container.innerHTML = "<p> Du fick " + chosenAnswer.length + " av 10 möjliga rätt, du är väl godkänd. Mycket bra jobbat!</p>";
    container.style.color = "green";
  }else if (chosenAnswer.length > 5){
    container.innerHTML = "<p> Du fick " + chosenAnswer.length + " av 10 möjliga rätt och är godkänd.</p>";
    container.style.color = "orange";
  }else if(chosenAnswer.length === 0){
    container.innerHTML = "<p> Du fick " + chosenAnswer.length + " av 10 möjliga rätt och är tyvärr inte godkänd. Ankademin är besviken på dig!</p>";
    container.style.color = "red";
  }else{
    container.innerHTML = "<p> Du fick " + chosenAnswer.length + " av 10 möjliga rätt och är tyvärr inte godkänd.</p>";
    container.style.color = "red";
  }
})