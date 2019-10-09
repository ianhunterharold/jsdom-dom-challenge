document.addEventListener("DOMContentLoaded", () => {
  addComment();
  counterStart();
  minusButton();
  addButton();
  hearted();
});
// add comments to page
function addComment(){
let input = document.getElementById("comment-input");
let button = document.getElementById("submit");
let comment = document.getElementById("comments");

button.addEventListener('click',(event)=>{
  event.preventDefault() // prevents the default feature of having you go to the server

  let text=input.value; // var text is being assigned to input value of what the user types in
  let li = document.createElement('li');
  li.textContent = text; 
  comments.appendChild(li);
  // why does comments or comment work for this? 
  })
};

// counter function 
// we want the time to increment in seconds when you open the page
function counterStart(){
  let timer = document.getElementById("counter"); // variable that finds the line with the id counter 
  let seconds = timer.innerText; //variable that is the inner text of that line
  let toNumber = parseInt(seconds, 10); // changing string to number
  toNumber += 1; // incrementing number by one 
  timer.innerText = toNumber; // the inner text of that line is now set to our incrementing number
}
setInterval(counterStart, 1000);



let seconds;
function minusButton(){
let subtractButton = document.getElementById("minus"); // find and define which feature we want to work with by the id minus 
let actualTimer = document.getElementById("counter"); // counter line that actually changes in value 

subtractButton.addEventListener('click', (event) => { 
  event.preventDefault() // something you add to prevent a redirection to another page 
  let seconds = actualTimer.innerText;
  let toNumber = parseInt(seconds, 10);
  toNumber -= 1;
  actualTimer.innerText = toNumber;
  })
};

function addButton(){
let addButton = document.getElementById("plus");
let actualTimer = document.getElementById("counter"); 

addButton.addEventListener('click', (event) => {
  event.preventDefault() // prevents from redirecting to another page 
  console.log('clicked on add button')
  let seconds = actualTimer.innerText;
  let toNumber = parseInt(seconds, 10); // turning string into number 
  toNumber += 1; // increasing number by one 
  actualTimer.innerText = toNumber; //adding one is applied to the inner text
  })
};

function hearted(){
  let heartButton = document.getElementById("heart");
  let actualTimer = document.getElementById("counter");
  let likeArea = document.getElementById("likes");


  heartButton.addEventListener('click', (event) => {
    event.preventDefault()
    console.log("clicked on heart so many times ");
    let seconds = actualTimer.innerText;

    let li = document.createElement('li'); // creating a div to put inside of ul
    li.textContent = `${seconds} has been liked X(think about this more) times.`
    document.ul.likes.appendChild(li);
    // still working on getting my appended child to show up where i want it to show up! 
  })
};


