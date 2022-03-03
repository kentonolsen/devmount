for (i = 1; i < 51; i++){
    var ret = (i % 3 )
    var cred = (i % 5)
    if (ret === 0 && cred === 0){
        console.log(`FizzBuzz`)
    }
    else if (ret === 0){
        console.log(`Fizz`)
    } 
    else if (cred === 0){
        console.log(`Buzz`)
    }
    else console.log(i)
}