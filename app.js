function getHistory() {
    return document.getElementById("history_value").innerText;
}
function printHistory(num) {
    document.getElementById("history_value").innerText=num;
}
function getOutput() {
    return document.getElementById("output_value").innerText;
}
function printOutput(num) {
    if (num== "") {
        document.getElementById("output_value").innerText=num ;
    }else {
        document.getElementById("output_value").innerText=formatNumber(num);
    }
    
}
function formatNumber(num) {
    let n =  Number(num);
    let value=n.toLocaleString("en")
    return value; 
}
let history;
let number=document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
   number[i].addEventListener("click",function () {
       history=getHistory();
       history=history+this.id;
       printHistory(history)
   }) 
} 
let oporator=document.getElementsByClassName("oporator");
for (let i = 0; i < number.length; i++) {
    oporator[i].addEventListener("click",function () {
     if(this.id =="clear"){
         printHistory("");
         printOutput("");
     } else if (this.id == "backspace"){
         history = getHistory();
         history  = history.substr(0,history.length - 1)
         printHistory(history);
         printOutput("");
     } else if (this.id == " = "){
       history = getHistory();
       var result = eval(history);
       printOutput(result);
       printHistory(history);
      
       
     } else{
        history = getHistory ()
        history += this.id;
        printHistory(history);
    }
   }) 
} 


