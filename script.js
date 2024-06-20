let ac=document.querySelector('.ac');
let del=document.querySelector('.del');
let input=document.getElementById('input')
let buttons=document.querySelectorAll('button')

let allinput='';  //all input value add here 

// array.from() mathode convert to node object to array object in the prototype collaction
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        // console.log(e.target.innerHTML)

if(e.target.innerHTML == 'del'){
    allinput=allinput.substring(0,allinput.length-1);    //substring delete to last sting of laneght
    input.value=allinput
}else if(e.target.innerHTML == 'ac'){
    allinput='';
    input.value=allinput
}else if(e.target.innerHTML == '='){
    allinput=eval(allinput);  //eval convert to all string to cord  exmpl 2+2=4
    input.value=allinput
}
else{
    allinput+=e.target.innerHTML
    input.value=allinput
   
}
})
})

