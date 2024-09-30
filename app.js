let goster=document.getElementById("goster")
goster.addEventListener("keydown",run)
console.log(goster)
let isaretler=["+","-","*","/","."]
let sayilar=["1","2","3","4","5","6","7","8","9","0"]
let hepsi=[]
let Hesaplananlar=[]
let İslemler=[]

function buton(e){//sitedeki tuşlarla yazabilmek için
  if(e=="+" || e=="-"|| e=="*"|| e=="/"||e==".")
  {
    if(isaret(e)!=false){
      goster.value+=e
    }
  }
  else if(e=="1" || e=="2"|| e=="3"||  e=="4" || e=="Backspace" || e=="5" || e=="6"|| e=="7"|| e=="8" || e=="9"|| e=="0")
  {
  goster.value+=e
  }
  else if(e=="="){
    enter();
  }
  else if(e="C"){
    goster.value=""
  }
}

function isaret(e){//isaretleri koyma ve kontrol etme
    hepsi=goster.value
    if(hepsi.length==0){
        if(e!="-"){
            return false;
        }
    }
    if(e=="."){
      if(hepsi.includes(e))
        return false
    }
    else{
        for(let i=0;i<5;i++){
           if(hepsi[hepsi.length-1]==isaretler[i]) {
            return false;
           }
        }
    }
    return true
}

function run(e) { // klavyeden de  yazabilmek için
    if(e.key=="+" || e.key=="-"|| e.key=="*"|| e.key=="/" || e.key=="."){
      if(isaret(e.key)==false) {
        e.preventDefault()
      }
    }
    else if(e.key=="1" || e.key=="2"|| e.key=="3"||  e.key=="4" || e.key=="Backspace" || e.key=="5" || e.key=="6"|| e.key=="7"|| e.key=="8" || e.key=="9"|| e.key=="0"){
    }
    else if(e.key=="Enter"){ 
   enter();
    }
    else{
    e.preventDefault()
    }
}

function enter(){ // hesaplama işlemi 
  let girdimi=false
  hepsi=goster.value
  let sayi=""
  sayac=0;
 
    for(let i=0;i<hepsi.length;i++){
      if(sayilar.includes(hepsi[i])|| hepsi[i]=="."){
      sayi+=hepsi[i]
      }
      else{
          if(i!=0){
      Hesaplananlar[sayac]=parseFloat(sayi)
      
      İslemler[sayac]=hepsi[i]
      sayac++;
      sayi=""
          }
          else{
          girdimi=true
          }
          
      }

      if(i+1==hepsi.length){
          Hesaplananlar[sayac]=Number(sayi);
      }
    }

    if(girdimi==true){
      Hesaplananlar[0]*=-1
    }
    
    while(İslemler.includes("*")==true){
      for(let i=0;i<İslemler.length;i++){
      if(İslemler[i]=="*"){
          Hesaplananlar[i]=Hesaplananlar[i]*Hesaplananlar[i+1]
          Hesaplananlar.splice(i+1,1)
          İslemler.splice(i,1)
          break;
      }
    }
    }
  
    while(İslemler.includes("/")==true){
      for(let i=0;i<İslemler.length;i++){
      if(İslemler[i]=="/"){
          Hesaplananlar[i]=Hesaplananlar[i]/Hesaplananlar[i+1]
          Hesaplananlar.splice(i+1,1)
          İslemler.splice(i,1)
          break;
      }
    }
    }
    while(İslemler.includes("-")==true){
      for(let i=0;i<İslemler.length;i++){
      if(İslemler[i]=="-"){
          Hesaplananlar[i]=Hesaplananlar[i]-Hesaplananlar[i+1]
          Hesaplananlar.splice(i+1,1)
          İslemler.splice(i,1)
          break;
      }
    }
    }
    
    while(İslemler.includes("+")==true){
      for(let i=0;i<İslemler.length;i++){
      if(İslemler[i]=="+"){
          Hesaplananlar[i]=Hesaplananlar[i]+Hesaplananlar[i+1]
          Hesaplananlar.splice(i+1,1)
          İslemler.splice(i,1)
          break;
      }
    }
    } 
    goster.value=Hesaplananlar[0];
    
}