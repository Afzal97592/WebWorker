const sum = document.querySelector("#sumButton");
const color = document.querySelector("#bgButton");

sum.addEventListener('click', (event)=>{
    let sum = 0;
    for(let i = 0; i<100000000; i++)
        sum+=i
        alert(`the sum is = ${sum}`)
        console.log(sum)
    
})

color.addEventListener('click', (event)=>{
    if(document.body.style.background !== 'green'){
        document.body.style.background = "green"
    }else{
        document.body.style.background = "blue"
    }
})