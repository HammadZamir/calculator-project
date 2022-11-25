let string = "";
const Buttons = document.querySelectorAll(".button");
const Input = document.querySelector(".input")



let Array = [Buttons]
Array[0].forEach(element => {
  element.addEventListener("click" ,(e)=>{
    if(e.target.innerHTML === "="){
      string = eval(string) 
      Input.value = string;
    }
    else if(e.target.innerHTML === "Clear"){
      console.log( string.value.spice(0,1,"",""))
      // Input.value = string;
    }
    else if(e.target.innerHTML === "C"){
      string = "";
      Input.value = string; 
    }
    else {
      string = string+ e.target.innerHTML;
      console.log(string);
      Input.value = string;
    }
  })
});





































// Todo: Make M+ M- and MC functional
// let string = "";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//   button.addEventListener('click', (e)=>{
//     if(e.target.innerHTML == '='){
//       string = eval(string);
//       document.querySelector('input').value = string;
//     }
//     else if(e.target.innerHTML == 'C'){
//       string = ""
//       document.querySelector('input').value = string;
//     }
//     else{ 
//     console.log(e.target)
//     string = string + e.target.innerHTML;
//     document.querySelector('input').value = string;
//       }
//   })
// })
