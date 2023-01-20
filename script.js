
const dictionario = new Map([
    ['e', "enter"],
    ['i', "imes"],
    ['a',    "ai"],
    ['o', "ober"],
    ['u', "ufat"]
  ]);


const dictiDes = new Map([
    ['enter', "e"],
    ['ime', "i"],
    ['ai',    "a"],
    ['ober', "o"],
    ['ufat', "u"]
  ]);


function verivaliText(){
    var text=new String(document.getElementById('textfor').value);
    var con=0;
    for(i=0;i<text.length;i++){

         if(text.charCodeAt(i)>=97 && text.charCodeAt(i)<=122 ||text.charCodeAt(i) ==32){
            cont=0;
         }else{
               con+=1; 
               break;
         }
    }
    
    if(document.getElementById('textfor').value.length<=0){
        alert("Caja de texto vacia");
        return false;
    }else if(con>0){
        alert("Caracteres no validos");    
        return false;
    }    else{
        return true;
    }
}


function encripta(){

   if(verivaliText()){

    document.getElementById("desencriptext").style.backgroundColor="#ffffff"
    var newtext="";
    var text=new String(document.getElementById('textfor').value);
    for(i=0;i<text.length;i++){
        if(dictionario.has(text.charAt(i))){        
          newtext+=dictionario.get(text.charAt(i));
          
        }else{
            newtext+=text.charAt(i);
            
        }     
    }
    document.getElementById('desencriptext').innerHTML=newtext;
   }
}


function desencripta(){
    var contador=0;
    if(verivaliText()){
        document.getElementById("desencriptext").style.backgroundColor="#ffffff"
       
        var text=new String(document.getElementById('textfor').value);
        var newtext=text;


        for (let i of dictiDes.keys()) {
            if(newtext.includes(i)){
                newtext=newtext.replaceAll(i,dictiDes.get(i));
             }
             
          }
        document.getElementById('desencriptext').innerHTML=newtext;

    }


}