
 function calculateTip() {
    //event.preventDefault()
   let bill = document.getElementById("bill").value;
   let servicequal = document.getElementById("servicequal").value;
   let numofpeople = document.getElementById("people").value;
   //console.log(bill)
   //console.log(servicequal)
   //console.log(numofpeople)

   if (bill > 0 && servicequal >= 0 && numofpeople > 0) {
       let totalTip = ((bill * servicequal) / numofpeople)
   //console.log ("total: " + totalTip)
   document.getElementById("tip").innerText = " " + totalTip + " reais";
   document.getElementById("totaltip").style.display = "block";
   } else {
       alert("Preencha os campos, por favor!")
   }
     
}

document.getElementById('totaltip').style.display = "none";