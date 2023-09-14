var textarea = document.querySelector("textarea");
var wordCounter = document.querySelector(".word-counter > .span-number")
var characterCounter = document.querySelector(".character-counter > .span-number")

textarea.addEventListener("input" , ()=>{

  var arr = []

  var currentString = textarea.value.trim()

  var arrayOfWords = currentString.split(" ") 

  var count = 0

  for(var i=0;i<arrayOfWords.length;i++){
    if(arrayOfWords[i] !==""){
      count++ 
     }
  }



  wordCounter.innerHTML = count
  characterCounter.innerHTML = textarea.value.length

  // characterCounter.innerHTML = currentString.length


})