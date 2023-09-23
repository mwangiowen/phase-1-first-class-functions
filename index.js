function receivesAFunction(callback){
    callback()
}
function myCallback(){
    console.log("Callback function called!")
}
receivesAFunction(myCallback)

function returnsANamedFunction(){
    function namedFunction(){
        console.log("This is a named function")
    }
    return namedFunction 
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("This is ananonymous function")
        
        return anonymousFunction
   }
}
