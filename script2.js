let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')

btn1.addEventListener('click', ()=>{
    const workerObj = new Worker("worker2.js")
    workerObj.postMessage("Worker Start")
    workerObj.onmessage = function(e){
    document.getElementById("output").innerHTML = e.data
   }
})

btn2.addEventListener('click', ()=>{
    document.getElementById('demo').innerHTML += "Hello World"
    console.log("hello")
})