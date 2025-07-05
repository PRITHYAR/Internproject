function fun(){
   
    let pwd=document.getElementById("id").value ;
    let warn1=document.getElementById("demo1");
    
    let l=8;
    let len=parseInt(l);
    let hasUpper=false;
    let hasLower=false;
    let hasNumber=false;
    let haSymbol=false;
   if(pwd.length>=len){
    for(let i=0;i<pwd.length;i++){
        let ch=pwd[i];
        if(ch>='a'&&ch<='z'){
            hasLower=true;
        }
        else if(ch>='A' && ch<='Z'){
            hasUpper=true;
        }
        else if(ch>=0 && ch<=9){
            hasNumber=true;
        }
        else{
            haSymbol=true;
        }
    }
}  
     if(hasUpper&&hasLower&&hasNumber&&haSymbol){
        warn1.textContent="Strong Password";
         warn1.style.color="green";

    }
    else if(hasUpper&&hasLower&&hasNumber){
     warn1.textContent="moderate Password";
     warn1.style.color="yellow";
     
     
    }
    else{
      warn1.textContent="Weak Password";
     warn1.style.color="red";
    }
 


}
