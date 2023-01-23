let screen =document.getElementById("screen");
let buttons=document.querySelectorAll("button");
let screenValue="";
for(let item of buttons){
    item.addEventListener("click",(e)=>{
        buttonText=e.target.innerText;
        console.log(buttonText);
        if(buttonText=="X"){
            buttonText="*";
            screenValue +=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=="C"){
           screenValue+="^";
           let len1=screenValue.length;
          screenValue=screenValue.replace(`${(screenValue[len1-2]+screenValue[len1-1])}`,""); 
            screen.value =screenValue;
        }
        else if(buttonText=="="){
            screen.value =eval(screenValue);
        }
        else{
            screenValue +=buttonText;
            screen.value=screenValue;
        }

    })
}