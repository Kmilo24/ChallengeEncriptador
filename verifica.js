
function verivaliText(text){
    //var newtext="";
   // var text=new String(document.getElementById('textfor').value);
    var con=0;
    for(i=0;i<text.length;i++){

         if(text.charCodeAt(i)>=97 && text.charCodeAt(i)<=122){
            cont=0;
         }else{
               con+=1; 
               break;
         }
    }
    console.log(con);

    if(document.getElementById('textfor').value.length<=0){
        alert("Caja de texto vacia");
        stop;
    }else if(con>0){
        alert("Caracteres no validos");
        stop;
    }    else{
        document.getElementById("desencriptext").style.backgroundColor="#ffffff"
        //encripta(newtext, text);
        
    }
}