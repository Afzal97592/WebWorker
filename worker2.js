onmessage = function(e){
    let result = 0;
    console.log(e.data)
    for(let i=0;i<10000000000; i++){
        result +=i
   
        // document.querySelector('#output').innerHTML = result
    }
     postMessage(result)
}