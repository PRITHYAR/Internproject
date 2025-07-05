function calculate(){
let h=document.getElementById("height").value;
let w=document.getElementById("weight").value;
let res=w/((h/100)**2);
res=res.toFixed(2);
document.getElementsByClassName("result")[0].innerText=res;
if(res<18.5){
    document.getElementsByClassName("range")[0].innerText="UnderWeight";
    }
else if(res>=18.5 && res<=24.9){
    document.getElementsByClassName("range")[0].innerText="Normal weight";
}
else if(res>=25 && res<=29.9){
    document.getElementsByClassName("range")[0].innerText="OverWeight";
}
else{
    document.getElementsByClassName("range")[0].innerText="Obese";
}
}

function resetForm() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.querySelector(".result").innerText = "";
  document.querySelector(".range").innerText = "";
}