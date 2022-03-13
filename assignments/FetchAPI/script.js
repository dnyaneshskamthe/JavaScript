fetch("https://jsonplaceholder.typicode.com/todos")
.then(resp=>resp.json()).then(data=>{
    displayData(data)

})

function displayData(d)
{
    let comp=document.getElementById("compl");
    let inc=document.getElementById('incompl');
   
    
    d.forEach(user=>{
        if(user.completed==true)
        {
            console.log(user.title);
            let p1=document.createElement('p')
            p1.textContent=user.title;
            comp.appendChild(p1);
        }
        else{
            let p2=document.createElement('p');
            p2.textContent=user.title;
            inc.appendChild(p2);
        }
    })
}
