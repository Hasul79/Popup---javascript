let clickMeBtn = document.getElementById("openPopup");
let popupDiv = document.getElementsByClassName("popup")[0];

clickMeBtn.onclick = function(){
popupDiv.style.display = "block";
}

let closeBtn = document.getElementById("close");
 closeBtn.onclick = function(){
    popupDiv.style.display = "none";
 }

 let data = [
    "HTML",
    "CSS",
    "JS"
 ];
 let showListBtn = document.getElementById("showList");
 let listDiv = document.getElementById("list");

  showListBtn.onclick = function(){

    let output = "";
     for(let i = 0; i<data.length; i++){
       output += "<p>" + data[i] + "</p>"
       console.log(data[i]);
     }

     listDiv.innerHTML = output; 
  }