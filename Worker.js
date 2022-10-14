console.log("Worker File")

onmessage=(data)=>{
    console.log(data)
    postMessage("data")
}