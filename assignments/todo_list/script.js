// get-Input,button,div
// eventlistener-if value is empty-do nothing- if value is string -add p tag to html dom
// ceate p, add elemt to p, append p in div
// add eventlistner to item p 
// After adding , make input empty
// to remove the elemnt , removechild method is used.


// let btn=document.getElementsByTagName("button")[0];
// let input_data=document.getElementsByTagName("input")[0].value;
// let div_data=document.getElementsByClassName("todos")[0];
// btn.addEventListener("click",function(){
//     let p=document.createElement('p');
//     p.innerText=input_data;
//     div_data.appendChild(p);

// })

let count=0;

document.getElementsByTagName("button")[0].addEventListener('click',function(){
    let data=document.getElementsByTagName("input")[0].value;
    if(data=="")
{
    alert("Empty")
}
else{
    let div_data=document.getElementsByClassName("todos")[0];
    
    let p=document.createElement("p");
    p.setAttribute('key',count);
    //let key=0;
    count=count+1;
    p.textContent=document.getElementsByTagName("input")[0].value;
    div_data.appendChild(p);
    document.getElementsByTagName("input")[0].value="";

    p.addEventListener('click',function(){
        div_data.removeChild(p);
    
    })
    
    
}


})
    
    // p.addEventListener("click",function(){div_data.removechild(p);


    // }
    

        
    // let deleteData=





