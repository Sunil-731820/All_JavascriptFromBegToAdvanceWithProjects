let premises = new Promise(function(solve, reject){
    const x = "Suni";
    const y =  "Sunil";
    if(x===y){
        solve();
    }else{
        reject();
    }
}


)

premises.then(function(){
    console.log("You Are Succeeded Sunil");
}).catch(function(){
    console.log("Please Try Again Sunil");
})